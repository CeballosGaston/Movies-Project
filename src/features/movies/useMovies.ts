import { useEffect, useState } from "react";
import type { Movie } from "./movies.types";
import { getMovies } from "./movies.service";
import { useRef } from "react";
import type { FiltersType } from "./movies.types";

export const useMovies = (filters: FiltersType) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);
  const loadMore = () => setPage((p) => p + 1);

  const loadMovies = async (pageNumber: number) => {
    console.log("FILTROS QUE VAN A API:", {
      page: pageNumber,
      ...filters,
    });

    try {
      setLoading(true);
      const { results, totalPages: apiTotalPages } = await getMovies({
        ...filters,
        page: pageNumber,
      });
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
  setMovies([]);
  setPage(1);
}, [filters]);

  useEffect(() => {
    loadMovies(page);
  }, [page, filters]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !loading && page < totalPages) {
          loadMore();
        }
      },
      {
        threshold: 1,
      },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, page, totalPages]);

  return { movies, loading, loaderRef };
};
