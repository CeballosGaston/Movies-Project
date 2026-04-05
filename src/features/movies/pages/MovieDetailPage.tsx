import { useParams } from "react-router-dom";
import { useMovieDetail } from "../useMovieDetail";

export const MovieDetailPage = () => {
  const { id } = useParams();

  const { movie, loading, error } = useMovieDetail(id!);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No data</p>;

 return (
  <div className="min-h-screen bg-gray-900 text-white p-6">
    <div className="max-w-4xl mx-auto">
      
      {/* Imagen */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6"
      />

      {/* Info */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        {movie.title}
      </h1>

      <p className="text-gray-300 mb-6 text-center">
        {movie.overview}
      </p>

      <div className="flex justify-center gap-6 text-sm text-gray-400">
        <span>📅 {movie.year}</span>
        <span>⭐ {movie.rating}</span>
      </div>

    </div>
  </div>
);
};

