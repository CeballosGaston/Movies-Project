import type { Movie } from "../movies.types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  // return (
  //   <div onClick={() => navigate(`/movie/${movie.id}`)}>
  //     <img
  //       src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
  //       alt="{movie.title}"
  //     />
  //     <h3>{movie.title}</h3>
  //   </div>
  // );

  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {/* Poster Image */}
        <div className="aspect-[2/3] overflow-hidden bg-muted relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium line-clamp-2 text-sm">
                    {movie.title}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">{movie.year}</p>
                </div>
                {/* <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    'shrink-0 hover:bg-white/20 size-8',
                    favorite ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-white'
                  )}
                  onClick={handleFavoriteClick}
                >
                  <Heart className={cn('size-4', favorite && 'fill-current')} />
                </Button> */}
              </div>

              {/* Rating and Genres */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 text-yellow-400 bg-black/50 px-2 py-0.5 rounded">
                  <Star className="size-3 fill-current" />
                  <span className="text-xs font-medium">
                    {movie.rating.toFixed(1)}
                  </span>
                </div>
                {movie.genres.length > 0 && (
                  <span className="text-white/70 text-xs bg-black/50 px-2 py-0.5 rounded line-clamp-1">
                    {movie.genres.slice(0, 2).join(", ")}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info (Always Visible) */}
        <div className="p-3 space-y-1">
          <h3 className="font-medium truncate text-sm leading-tight">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{movie.year}</span>
            <div className="flex items-center gap-1">
              <Star className="size-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{movie.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
