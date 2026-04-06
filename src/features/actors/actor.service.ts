import tmdbClient from "../../core/api/tmdb.client";
import type { ActorDetails } from "./actors.type";

interface CreditsResponse {
  cast: { id: number; title: string; poster_path: string }[];
  crew: { id: number; title: string; job: string ; poster_path:string}[];
}

export const getActorDetails = async (
  id: string,
): Promise<
  ActorDetails & {
    movie_credits: { id: number; title: string; poster_path: string }[];
  }
> => {
  const res = await tmdbClient.get(`/person/${id}`);
  const actorData = res.data;

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
    id: actorData.id,
    name: actorData.name,
    profile_path: actorData.profile_path
      ? `https://image.tmdb.org/t/p/w200${actorData.profile_path}`
      : "",
    biography: actorData.biography,
    birthday: actorData.birthday,
    place_of_birth: actorData.place_of_birth,
    movie_credits,
  };
};
