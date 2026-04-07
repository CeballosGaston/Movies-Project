import { useFavorites } from "../FavoritesContext";
import { MovieCard } from "../../movies/components/MovieCard";
import { FavoritesEmpryState } from "./FavoritesEmptyState";

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <FavoritesEmpryState />;
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Your Favorites ❤️</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
