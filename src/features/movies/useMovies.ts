import { useEffect, useState } from "react";
import type { Movie } from "./movies.types";
import { getMovies } from "./movies.service";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);
  const loadMore = () => setPage((p) => p + 1);

  const loadMovies = async (pageNumber: number) => {
    try {
      setLoading(true);
      const { results, totalPages: apiTotalPages } =
        await getMovies(pageNumber);
      setTotalPages(apiTotalPages);
      setMovies((prev) => {
        const map = new Map();

        [...prev, ...results].forEach((movie) => {
          map.set(movie.id, movie);
        });

        return Array.from(map.values());
      });
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      if (page > totalPages) return;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;

      if (scrollTop + windowHeight >= docHeight - 100) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return { movies, loading };
};
