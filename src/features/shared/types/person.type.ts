import { Person } from "./sharedTypes";

export interface PersonDetails extends Person {
  biography?: string;
  birthday?: string;
  place_of_birth?: string;
  movie_credits: { id: number; title: string; poster_path: string }[];
}
