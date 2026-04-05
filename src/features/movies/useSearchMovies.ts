import { useEffect, useState } from "react";
import { searchMovies } from "../movies/movies.service";
import type { Movie } from "../movies/movies.types";

export const useSearchMovies = (query: string | null) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    const fetchSearch = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (err) {
        setError("Error buscando películas");
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [query]);

  return { movies, loading, error };
};
