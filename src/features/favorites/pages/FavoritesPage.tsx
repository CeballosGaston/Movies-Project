import { useFavorites } from "../FavoritesContext";
import { MovieCard } from "../../movies/components/MovieCard";

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center text-center px-4">
      
      <div className="text-6xl mb-4">🎬</div>

      <h2 className="text-2xl font-bold mb-2">
        You don't have any favorites yet
      </h2>

      <p className="text-muted-foreground mb-6 max-w-md">
        Explore movies and save your favorites to watch them here ❤️
      </p>

      <a
        href="/"
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition"
      >
        Explore movies
      </a>

    </div>
  );
}
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Favorites ❤️</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
