import { MovieCard } from "../features/movies/components/MovieCard";
import { useMovies } from "../features/movies/useMovies";

export const HomePage = () => {
  const { movies, loading } = useMovies();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
     
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
