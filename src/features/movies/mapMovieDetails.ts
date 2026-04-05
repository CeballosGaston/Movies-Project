import type { MovieDetails } from "./movies.types";

export const mapMovieDetails = (apiMovie: any): MovieDetails => ({
  id: apiMovie.id,
  title: apiMovie.title,
  poster: `https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`,
  backdrop: `https://image.tmdb.org/t/p/original${apiMovie.backdrop_path}`,
  year: Number(apiMovie.release_date?.split("-")[0]) || 0,
  rating: apiMovie.vote_average ?? 0,
  genres: apiMovie.genres?.map((g: any) => g.name) ?? [],
  overview: apiMovie.overview,
  runtime: apiMovie.runtime,
});