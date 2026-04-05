import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MovieDetailPage } from "../features/movies/pages/MovieDetailPage";
import { FavoritesPage } from "../features/favorites/pages/FavoritesPage";
import { SearchPage } from "../pages/SearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/search" element={<SearchPage />} />
      
    </Routes>
  );
};
