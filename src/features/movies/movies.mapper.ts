import type { Movie } from "./movies.types";

export const mapMovie = (apiMovie: any): Movie => ({
  id: apiMovie.id,
  title: apiMovie.title,
  poster: `https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`,
  year: apiMovie.release_date?.split("-")[0] || "—",
  rating: apiMovie.vote_average ?? 0,
  genres: apiMovie.genre_ids ?? [],
});