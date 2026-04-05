import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 px-3 py-1 rounded-md bg-gray-800 text-sm outline-none w-48"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="px-3 py-1 rounded-md bg-muted text-sm"
      />
      <button type="submit">🔍</button>
    </form>
  );
};
