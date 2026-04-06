import tmdbClient from "../../core/api/tmdb.client";
import type { PersonDetails } from "../shared/types/person.type";

interface CreditsResponse {
  cast: { id: number; title: string; poster_path: string }[];
  crew: { id: number; title: string; job: string; poster_path: string }[];
}

export const getPersonDetails = async (
  id: string,
): Promise<PersonDetails> => {
  const res = await tmdbClient.get(`/person/${id}`);
  const personData = res.data;

  const creditsRes = await tmdbClient.get(`/person/${id}/movie_credits`);
  const creditsData: CreditsResponse = creditsRes.data;

  const castMovies = (creditsData.cast ?? []).map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : "",
  }));

  const crewMovies = (creditsData.crew ?? [])
    .filter((movie) => movie.poster_path)
    .map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
    }));

  const movie_credits = [...castMovies, ...crewMovies];

  return {
    id: personData.id,
    name: personData.name,
    profile_path: personData.profile_path
      ? `https://image.tmdb.org/t/p/w200${personData.profile_path}`
      : "",
    biography: personData.biography,
    birthday: personData.birthday,
    place_of_birth: personData.place_of_birth,
    movie_credits,
  };
};
