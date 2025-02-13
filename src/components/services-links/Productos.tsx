import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";

const Productos: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Productos/productos1.jpeg", alt: "Perfume para Barba" },
        { id: 2, src: "media/Productos/productos2.jpeg", alt: "Bálsamo para Barba" },
        { id: 3, src: "media/Productos/productos3.jpeg", alt: "Cera Moderadora" },
        { id: 4, src: "media/Productos/productos4.jpeg", alt: "Pomada para Cabello y Barba" },
        { id: 5, src: "media/Productos/productos5.jpeg", alt: "Polvo Texturizador" },
        { id: 6, src: "media/Productos/productos6.jpeg", alt: "Gel" },
        { id: 7, src: "media/Productos/productos7.jpeg", alt: "Cera Spider" },
        { id: 8, src: "media/Productos/productos8.jpeg", alt: "Perfumes por Encargo" },
        { id: 9, src: "media/Productos/productos9.jpeg", alt: "Tazas Personalizadas por Encargo" }
    ];

    return (
        <section className="text-center pt-30 px-2 w-screen flex flex-col items-center justify-center mx-auto bg-neutral-800">
            <div className="max-w-[1800px]">
                <h1 className="text-4xl font-bold text-red-500">Nuestros Productos</h1>
                <p className="mt-4 text-lg text-white">Aquí puedes explorar todos Nuestros Productos.</p>
                <ServicesComponent cortes={cortes} />
                <div className="mt-25">
                    <Services currentPage="Productos" />
                </div>
            </div>
        </section>
    );
};

export default Productos;