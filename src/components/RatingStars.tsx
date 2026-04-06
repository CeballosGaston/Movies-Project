import { useState, useEffect } from "react";

interface RatingStarsProps {
  movieId: number;
  editable?: boolean;
}

export const RatingStars = ({ movieId, editable = true }: RatingStarsProps) => {
  const [rating, setRating] = useState(0); // rating actual
  const [hover, setHover] = useState(0); // hover para efecto visual

  // Cargar rating desde localStorage al iniciar
  useEffect(() => {
    const savedRatings = JSON.parse(
      localStorage.getItem("movie_ratings") || "{}",
    );
    if (savedRatings[movieId]) {
      setRating(savedRatings[movieId]);
    }
  }, [movieId]);

  const handleClick = (value: number) => {
    if (!editable) return;
    setRating(value);
    const savedRatings = JSON.parse(
      localStorage.getItem("movie_ratings") || "{}",
    );
    savedRatings[movieId] = value;
    localStorage.setItem("movie_ratings", JSON.stringify(savedRatings));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-gray-300 text-sm font-medium">Your Punctuation</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={star <= (hover || rating) ? "#FFD700" : "#555"} // amarillo si seleccionado
            className={`w-6 h-6 cursor-pointer ${!editable && "cursor-default"}`}
            onMouseEnter={() => editable && setHover(star)}
            onMouseLeave={() => editable && setHover(0)}
            onClick={() => handleClick(star)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.893a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.262 3.892c.3.922-.755 1.688-1.54 1.118l-3.32-2.41a1 1 0 00-1.175 0l-3.32 2.41c-.784.57-1.838-.196-1.539-1.118l1.262-3.892a1 1 0 00-.364-1.118L2.238 9.32c-.784-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.262-3.893z" />
          </svg>
        ))}
      </div>
    </div>
  );
};
