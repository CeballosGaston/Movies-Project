import type { Movie } from "../features/movies/movies.types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
        alt="{movie.title}"
      />
      <h3>{movie.title}</h3>
    </div>
  );
};
