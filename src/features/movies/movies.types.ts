import { Person } from "../shared/types/sharedTypes";

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
  director?: Person;
  cast?: Person[];
  trailer?: string;
}

export interface FiltersType {
  genre?: number;
  year?: number;
  rating?: number;
}
