import type { Dispatch, SetStateAction } from "react";
import type { FiltersType } from "../features/movies/movies.types";


interface Props {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
}

export const Filters = ({ filters, setFilters }: Props) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">

      {/* 🎬 Género */}
      <select
        className="bg-gray-800 text-white px-3 py-2 rounded"
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

      
      <input
        type="number"
        placeholder="Año"
        className="bg-gray-800 text-white px-3 py-2 rounded w-24"
        value={filters.year ?? ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            year: e.target.value ? Number(e.target.value) : undefined,
          }))
        }
      />

      
      <select
        className="bg-gray-800 text-white px-3 py-2 rounded"
        value={filters.rating ?? ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            rating: e.target.value ? Number(e.target.value) : undefined,
          }))
        }
      >
        <option value="">Rating</option>
        <option value="7">+7</option>
        <option value="8">+8</option>
        <option value="9">+9</option>
      </select>

      
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