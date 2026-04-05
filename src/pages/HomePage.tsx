import { useState } from "react";
import { MovieCard } from "../features/movies/components/MovieCard";
import { useMovies } from "../features/movies/useMovies";
import  type {FiltersType} from "../features/movies/movies.types"
import { Filters as FiltersComponent } from "../components/Filters";

export const HomePage = () => {
  const [filters, setFilters] = useState<FiltersType>({});


  const { movies, loading, loaderRef } = useMovies(filters);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      
      {/* 🎬 Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Movies
      </h1>

      {/* 🎛️ Filtros */}
      <FiltersComponent filters={filters} setFilters={setFilters} />

      {/* ⏳ Loading inicial */}
      {loading && movies.length === 0 && (
        <p className="text-muted-foreground">Loading...</p>
      )}

      {/* 🎞️ Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* ⬇️ Loader infinito */}
      <div ref={loaderRef} className="h-10 flex items-center justify-center">
        {loading && movies.length > 0 && (
          <p className="text-sm text-muted-foreground">Loading more...</p>
        )}
      </div>
    </div>
  );
};