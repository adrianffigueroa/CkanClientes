import { useCkanSearch } from "@/hooks/useCkanSearch";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Datasets() {
  const [query, setQuery] = useState("agua"); // valor inicial
  const { data: datasets, loading, error } = useCkanSearch(query);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buscar Datasets</h1>
      <Input
        placeholder="Buscar por palabra clave"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 max-w-md"
      />

      {loading && <p>Cargando...</p>}
      {error && <p>Error al cargar datasets</p>}

      <ul className="space-y-4">
        {datasets.map((ds) => (
          <li key={ds.id} className="border p-4 rounded shadow bg-white">
            <h2 className="font-semibold">{ds.title}</h2>
            <p className="text-sm text-gray-600">{ds.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Datasets;
