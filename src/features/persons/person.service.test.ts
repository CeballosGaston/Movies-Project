import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPersonDetails } from "./person.service";
import tmdbClient from "../../core/api/tmdb.client";

vi.mock("../../core/api/tmdb.client");

describe("getPersonDetails", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return transformed person details", async () => {
    (tmdbClient.get as any)
      .mockResolvedValueOnce({
        data: {
          id: 1,
          name: "John Doe",
          profile_path: "/profile.jpg",
          biography: "Bio",
          birthday: "1990-01-01",
          place_of_birth: "NY",
        },
      })
      .mockResolvedValueOnce({
        data: {
          cast: [
            {
              id: 10,
              title: "Movie Cast",
              poster_path: "/cast.jpg",
            },
          ],
          crew: [
            {
              id: 20,
              title: "Movie Crew",
              job: "Director",
              poster_path: "/crew.jpg",
            },
          ],
        },
      });

    const result = await getPersonDetails("1");

    expect(result.id).toBe(1);
    expect(result.name).toBe("John Doe");

    expect(result.profile_path).toContain("https://image.tmdb.org");

    expect(result.movie_credits.length).toBe(2);

    expect(result.movie_credits[0]).toHaveProperty("poster_path");
  });
});