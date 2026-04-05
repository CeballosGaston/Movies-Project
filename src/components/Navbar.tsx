import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold">
          🎬 MoviesApp
        </Link>

        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/favorites" className="hover:text-gray-300">
            Favorites
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>
        </div>

      </div>
    </nav>
  );
};