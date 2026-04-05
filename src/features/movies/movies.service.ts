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

export const getMovies = async ({
  page,
  genre,
  year,
  rating,
}: {
  page: number;
  genre?: number;
  year?: number;
  rating?: number;
}) => {
  const params: any = {
    page,
  };

  if (genre) {
    params.with_genres = genre;
  }

  if (year) {
    params.primary_release_year = year;
  }

  if (rating) {
    params["vote_average.gte"] = rating;
  }

  console.log("PARAMS FINALES:", params);
  const res = await tmdbClient.get("/discover/movie", {
    params,
  });

  return {
    results: res.data.results.map(mapMovie),
    totalPages: res.data.total_pages,
  };
};

export const searchMovies = async (
  query: string,
  page: number = 1
): Promise<GetMoviesResponse> => {
  const res = await tmdbClient.get("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return {
    results: res.data.results.map(mapMovie),
    totalPages: res.data.total_pages,
  };
};