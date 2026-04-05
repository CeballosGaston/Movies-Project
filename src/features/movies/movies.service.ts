import tmdbClient from "../../core/api/tmdb.client";
import { mapMovie } from "./mapMovie";
import { mapMovieDetails } from "./mapMovieDetails";
import type { Movie } from "./movies.types";

interface GetMoviesResponse {
  results: Movie[];
  totalPages: number;
}

export const getPopularMovies = async () => {
  const response = await tmdbClient.get("/movie/popular");
  return response.data.results;
};

export const getMovieDetails = async (id: string) => {
  const res = await tmdbClient.get(`/movie/${id}`);
  return mapMovieDetails(res.data);
};

export const getMovies = async (page: number): Promise<GetMoviesResponse> => {
  const res = await tmdbClient.get("/discover/movie", {
    params: {
      page,
    },
  });

  return {
    results: res.data.results.map(mapMovie),

    totalPages: res.data.total_pages,
  };
};
