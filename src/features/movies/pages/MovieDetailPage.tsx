import { useParams } from "react-router-dom";
import { useMovieDetail } from "../useMovieDetail";

export const MovieDetailPage = () => {
  const { id } = useParams();

  const { movie, loading, error } = useMovieDetail(id!);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No data</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Year: {movie.year}</p>
      <p>Rating {movie.rating}</p>
    </div>
  );
};

