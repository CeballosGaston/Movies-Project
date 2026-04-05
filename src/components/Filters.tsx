import type { Dispatch, SetStateAction } from "react";
import type { FiltersType } from "../features/movies/movies.types";

interface Props {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
}

export const Filters = ({ filters, setFilters }: Props) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i,
  );

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* 🎬 Género */}

      <div className="relative">
        <select
          className="bg-gray-800 text-white px-4 py-2 pr-12 rounded appearance-none"
          value={filters.genre ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              genre: e.target.value ? Number(e.target.value) : undefined,
            }))
          }
        >
          <option value="">Género</option>
          <option value="28">Acción</option>
          <option value="35">Comedia</option>
          <option value="18">Drama</option>
        </select>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm">
          ▼
        </span>
      </div>

      <div className="relative">

      <select
        className="bg-gray-800 text-white px-4 py-2 pr-12 rounded appearance-none"
        value={filters.year ?? ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            year: e.target.value ? Number(e.target.value) : undefined,
          }))
        }
      >
        <option value="">Año</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
       <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm">
          ▼
        </span>

      </div>

      <div className="relative">

      <select
        className="bg-gray-800 text-white px-4 py-2 pr-12 rounded appearance-none"
        value={filters.rating ?? ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            rating: e.target.value ? Number(e.target.value) : undefined,
          }))
        }
      >
        <option value="">Rating</option>
        <option value="7.0">+7</option>
        <option value="8.0">+8</option>
        <option value="9.0">+9</option>
      </select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm">
          ▼
        </span>

      </div>



      <button
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        onClick={() =>
          setFilters({
            genre: undefined,
            year: undefined,
            rating: undefined,
          })
        }
      >
        Limpiar filtros
      </button>
    </div>
  );
};
