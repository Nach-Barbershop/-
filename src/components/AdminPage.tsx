import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para navegación al home

interface Price {
  id: number;
  corte: string;
  precio: string;
}

const AdminPage: React.FC = () => {
  const [prices, setPrices] = useState<Price[]>([]);
  const [editing, setEditing] = useState<{ [key: number]: string }>({});
  const [saving, setSaving] = useState(false); // Estado para el botón "Guardar Todos"
  const [saved, setSaved] = useState(false); // Estado para "Todos los cambios guardados"
  const [fading, setFading] = useState(false); // Estado para animación de fade-out del mensaje

  const navigate = useNavigate(); // Hook para redirigir al home

  const API_URL = "https://ellocomazur.com/dylanmz/barberia";
  const ALLOWED_IDS = [7, 8, 9, 10];

  const fetchPrices = useCallback(() => {
    axios
      .get(`${API_URL}/getListaPrecios2.php?user=DyMz&modo=all`, {
        responseType: "text",
      })
      .then((res) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data, "text/html");
        const rows = Array.from(doc.querySelectorAll("tr"))
          .map((row) => {
            const columns = row.querySelectorAll("td");
            const id = parseInt(columns[0].textContent || "0", 10);

            return {
              id: id,
              corte: columns[1].textContent || "",
              precio: columns[2].textContent || "",
            };
          })
          .filter((price) => ALLOWED_IDS.includes(price.id));

        setPrices(rows);
      })
      .catch((err) => console.error("Error al obtener los precios:", err));
  }, [API_URL]);

  const handleUpdateAll = async () => {
    setSaving(true);
    setSaved(false);

    try {
      const updatePromises = Object.keys(editing).map((id) => {
        const nuevoPrecio = editing[parseInt(id)];
        if (!nuevoPrecio) return null;

        const updateUrl = `${API_URL}/updateImporte.php?id=${id}&importe=${nuevoPrecio}`;
        return axios.get(updateUrl);
      });

      // Ejecutar todas las actualizaciones en paralelo
      await Promise.all(updatePromises);

      console.log("Todos los precios han sido actualizados.");
      setSaved(true);

      // Iniciar fade-out después de 3 segundos
      setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setSaved(false);
          setFading(false);
        }, 500); // Duración de la animación (500ms)
      }, 3000);

      fetchPrices(); // Actualizar los precios después de guardar
    } catch (err) {
      console.error("Error al guardar los cambios:", err);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return (
    <div className="p-6 h-screen flex flex-col items-center justify-center relative">
      <h3 className="text-xl font-bold mb-4">Editar Precios</h3>
      {prices.length === 0 ? (
        <p>Cargando precios...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {prices.map(({ id, corte, precio }) => (
            <div key={id} className="flex flex-col items-start gap-3">
              <span className="w-40 font-semibold">{corte}</span>
              <input
                type="text"
                value={editing[id] ?? precio}
                onChange={(e) =>
                  setEditing((prev) => ({ ...prev, [id]: e.target.value }))
                }
                className="border p-1 w-[240px]"
              />
            </div>
          ))}

          {/* Botón para guardar los cambios */}
          <div className="flex flex-col items-center gap-2 mt-4 relative">
            <button
              onClick={handleUpdateAll}
              disabled={saving}
              className={`px-4 py-2 rounded ${
                saving
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
            >
              {saving ? "Guardando Cambios..." : "Guardar Cambios"}
            </button>

            {/* Mensaje "Todos los cambios guardados" */}
            {saved && (
              <span
                className={`text-green-500 text-sm absolute -bottom-6 transition-opacity duration-500 ${
                  fading ? "opacity-0" : "opacity-100"
                }`}
              >
                Cambios guardados <span>✔</span>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Botón para volver al inicio */}
      <button
        onClick={() => navigate("/")}
        className="w-[172.3px] px-4 py-2 mt-10 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Inicio
      </button>
    </div>
  );
};

export default AdminPage;