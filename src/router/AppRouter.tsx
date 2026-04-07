import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MovieDetailPage } from "../features/movies/pages/MovieDetailPage";
import { FavoritesPage } from "../features/favorites/pages/FavoritesPage";
import { SearchPage } from "../pages/SearchPage";
import { PersonDetail } from "../features/persons/pages/PersonDetail";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "../features/auth/pages/Login";
import { RegisterPage } from "../features/auth/pages/RegisterPage";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <MovieDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/person/:id"
        element={
          <ProtectedRoute>
            <PersonDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
