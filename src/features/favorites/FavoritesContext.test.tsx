import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "./FavoritesContext";
import type { Movie } from "../movies/movies.types";

// mock movie
const movie: Movie = {
  id: 1,
  title: "Test Movie",
  poster: "/test.jpg",
  year: 2024,
  rating: 8,
  genres: ["Action"],
} as Movie;

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FavoritesProvider>{children}</FavoritesProvider>
);

describe("FavoritesContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should start with empty favorites", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    expect(result.current.favorites).toEqual([]);
  });

  it("should add a favorite movie", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movie);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites[0].id).toBe(1);
  });

  it("should remove a favorite movie", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movie);
    });

    act(() => {
      result.current.removeFavorite(movie.id);
    });

    expect(result.current.favorites).toHaveLength(0);
  });

  it("should detect if movie is favorite", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movie);
    });

    expect(result.current.isFavorite(1)).toBe(true);
    expect(result.current.isFavorite(999)).toBe(false);
  });
});
