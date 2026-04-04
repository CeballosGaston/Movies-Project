import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MovieDetailPage } from "../features/movies/pages/MovieDetailPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  );
};
