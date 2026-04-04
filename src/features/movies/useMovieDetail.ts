import { useEffect, useState } from "react";
import { getMovieDetails } from "./movies.service";
import { MovieDetails } from "./movies.types";

export const useMovieDetail = (id: string) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.error(err);
        setError("Loading Error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  return { movie, loading, error };
};
