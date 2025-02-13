import React, { useEffect, useState } from "react";
import axios from "axios";

interface Price {
  id: number;
  corte: string;
  precio: string;
}

const PriceList: React.FC = () => {
  const [prices, setPrices] = useState<Price[]>([]);

  // Función para convertir la tabla HTML en un array JSON
  const parseHTMLToPrices = (htmlString: string): Price[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const rows = doc.querySelectorAll("tr");
    let id = 1; // Generar ID manualmente

    return Array.from(rows).map((row) => {
      const columns = row.querySelectorAll("td");
      if (columns.length < 2) return null; // Ignorar filas no válidas
      return {
        id: id++,
        corte: columns[0].textContent?.trim() || "",
        precio: columns[1].textContent?.trim() || "",
      };
    }).filter(Boolean) as Price[];
  };

  // Obtener los precios desde la API
  useEffect(() => {
    axios
      .get("https://ellocomazur.com/dylanmz/barberia/getListaPrecios2.php", {
        responseType: "text", // 📌 Importante: recibir como texto
      })
      .then((res) => {
        console.log("HTML recibido:", res.data); // Verificar el HTML recibido
        const parsedPrices = parseHTMLToPrices(res.data);
        console.log("Precios convertidos:", parsedPrices); // Verificar la conversión
        setPrices(parsedPrices);
      })
      .catch((error) => {
        console.error("Error al obtener los precios:", error);
      });
  }, []);

  return (
    <div className="items-start mt-[25px] grid grid-cols-1 gap-y-3">
      {prices.map(({ id, corte, precio }) => (
        <div key={id} className="flex justify-between w-[90vw] max-w-[400px]">
          <p className="font-semibold text-[24px] ts-sm">{corte}</p>
          <p className="font-semibold text-blue-500 text-[24px] ts-sm">${precio}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceList;