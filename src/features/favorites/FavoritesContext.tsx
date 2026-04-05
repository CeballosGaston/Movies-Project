import { createContext, useContext, useState } from "react";
import type { Movie } from "../movies/movies.types";

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((m) => m.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must to be used inside FavoritesProvider");
  }

  return context;
};


