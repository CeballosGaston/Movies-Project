import { MovieCard } from "../features/movies/components/MovieCard";
import { useMovies } from "../features/movies/useMovies";

export const HomePage = () => {
  const { movies, loading, loaderRef } = useMovies();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Movies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-start">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div ref={loaderRef} className="h-10" />
    </div>
  );
};
