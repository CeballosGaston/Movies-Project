export const FavoritesEmpryState = () => {
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
};
