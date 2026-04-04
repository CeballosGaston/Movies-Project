import tmdbClient from "../../core/api/tmdb.client";

export const getPopularMovies = async () => {
  const response = await tmdbClient.get("/movie/popular");
  return response.data.results;
};

export const getMovieDetails = async (id: string) => {
  const res = await tmdbClient.get(`/movie/${id}`);
  return res.data;
};

export const getMovies = async (page: number) => {
  const res = await tmdbClient.get("/discover/movie", {
    params: {
      page,
    },
  });

  return {
    results: res.data.results,

    totalPages: res.data.total_pages,
  };
};
