import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../features/movies/useSearchMovies";
import { MovieCard } from "../features/movies/components/MovieCard";

export const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q");

  const { movies, loading, error } = useSearchMovies(query);

 return (
  <div className="bg-black text-white min-h-screen px-6 py-8">
    
    {/* Header */}
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Resultados para:{" "}
        <span className="text-primary">{query}</span>
      </h1>

      {loading && <p className="mt-2 text-sm text-muted-foreground">Loading...</p>}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);
};
