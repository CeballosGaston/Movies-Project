import type { MovieDetails } from "./movies.types";

export const mapMovieDetails = (
  apiMovie: any,
  credits?: any
): MovieDetails => {
  
  const cast = credits?.cast?.slice(0, 6).map((actor: any) => ({
    id: actor.id,
    name: actor.name,
    profile_path: actor.profile_path
      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
      : "",
  }));

  const directorData = credits?.crew?.find(
    (person: any) => person.job === "Director"
  );

  const director = directorData
    ? {
        id: directorData.id,
        name: directorData.name,
        profile_path: directorData.profile_path
          ? `https://image.tmdb.org/t/p/w200${directorData.profile_path}`
          : "",
      }
    : undefined;

  return {
    id: apiMovie.id,
    title: apiMovie.title,
    poster: `https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/original${apiMovie.backdrop_path}`,
    year: Number(apiMovie.release_date?.split("-")[0]) || 0,
    rating: apiMovie.vote_average ?? 0,
    genres: apiMovie.genres?.map((g: any) => g.name) ?? [],
    overview: apiMovie.overview,
    runtime: apiMovie.runtime,

    // 👇 NUEVO
    cast,
    director,
  };
};