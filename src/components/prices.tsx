import React, { useEffect, useState } from "react";
import axios from "axios";

interface Price {
    id: number;
    corte: string;
    precio: string;
}

const Prices: React.FC = () => {
    const [prices, setPrices] = useState<Price[]>([]);

    const ALLOWED_IDS = [7, 8, 9, 10];

  // Obtener los precios
    const fetchPrices = () => {
        axios
            .get(
                "https://ellocomazur.com/dylanmz/barberia/getListaPrecios2.php?user=DyMz&modo=all",
                { responseType: "text" }
            )
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
                    .filter((price) => ALLOWED_IDS.includes(price.id)); // 🔥 Filtrar solo los IDs permitidos
                
                setPrices(rows);
            })
            .catch((err) => console.error("Error al obtener los precios:", err));
    };

    useEffect(() => {
        fetchPrices();
    }, []);

    return (
        <section
            id="precios"
            className="w-screen h-auto flex flex-col items-center justify-center mb-[75px]"
        >
            <div className="w-screen h-auto flex flex-col items-center justify-center text-center">
                <h3 className="text-[36px] md:text-[40px] font-semibold mx-4">
                    LISTA DE PRECIOS
                </h3>
                <div className="h-1 bg-blue-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div className="items-start mt-[25px] grid grid-cols-1 gap-y-3">
                {prices.map(({ id, corte, precio }) => (
                    <div
                        key={id}
                        className="flex justify-between items-center mx-2 w-[90vw] max-w-[450px]"
                    >
                        <p className="font-bold text-[22px] md:text-[24px]">{corte}</p>
                        <p className="font-bold text-blue-600 text-[22px] md:text-[24px]">
                            ${precio}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Prices;