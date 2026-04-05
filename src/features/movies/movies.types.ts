import type { Actor } from "../actors/actor.types";

export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  rating: number;
  genres: string[];
}

export interface MovieDetails {
  id: number;
  title: string;
  poster: string;
  backdrop: string;
  year: number;
  rating: number;
  genres: string[];
  overview: string;
  runtime?: number;
  director?: string;
  cast?: Actor[];
  trailer?: string;
}

export interface FiltersType {
  genre?: number;
  year?: number;
  rating?: number;
}