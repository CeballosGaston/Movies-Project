import { useParams } from "react-router-dom";
import { useActorDetail } from "../useActorDetail";

export const ActorDetail = () => {
  const { id } = useParams();
  const { actor, loading, error } = useActorDetail(id!);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!actor) return <p className="text-white text-center mt-10">No data</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header: Foto y Nombre */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          <img
            src={actor.profile_path}
            alt={actor.name}
            className="w-48 rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{actor.name}</h1>
            
            {actor.birthday && (
              <p className="text-gray-400 mb-2">Cumpleaños: {actor.birthday}</p>
            )}
            {actor.place_of_birth && (
              <p className="text-gray-400 mb-2">Lugar de nacimiento: {actor.place_of_birth}</p>
            )}
          </div>
        </div>

        {/* Biografía */}
        {actor.biography && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Biografía</h2>
            <p className="text-gray-300">{actor.biography}</p>
          </div>
        )}

        {/* Películas */}
        {actor.movie_credits && actor.movie_credits.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Películas</h2>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {actor.movie_credits.map((movie) => (
                <div key={movie.id} className="flex-none w-32">
                  <img
                    src={movie.poster_path || "https://via.placeholder.com/200x300?text=No+Image"}
                    alt={movie.title}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};