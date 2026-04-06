import { useParams, useNavigate } from "react-router-dom";
import { useMovieDetail } from "../useMovieDetail";

export const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

{movie.director && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Director</h2>
            <div
              className="flex items-center gap-4 cursor-pointer hover:opacity-80"
              onClick={() => navigate(`/director/${movie.director!.id}`)}
            >
              <img
                src={movie.director.profile_path || "/no-avatar.png"}
                alt={movie.director.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="text-lg">{movie.director.name}</p>
            </div>
          </div>
        )}

        {/* Cast */}
        {movie.cast && movie.cast.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Cast</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {movie.cast.map((actor) => (
                <div
                  key={actor.id}
                  className="min-w-[100px] text-center cursor-pointer hover:opacity-80"
                  onClick={() => navigate(`/actor/${actor.id}`)}
                >
                  <img
                    src={actor.profile_path || "/no-avatar.png"}
                    alt={actor.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-2"
                  />
                  <p className="text-sm">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}


    </div>
  </div>
);
};

