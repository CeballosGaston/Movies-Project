import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../features/movies/useMovies";

export const HomePage = () => {
  const { movies, loading, loadMore } = useMovies();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>Home funciona</div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
