import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";


const CortesBarba: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Barbas/barba-1.jpeg", alt: "Barba Estilo Lumberjack" },
        { id: 2, src: "media/Barbas/barba-2.jpeg", alt: "Barba Cuadrada Definida" },
        { id: 3, src: "media/Barbas/barba-3.jpeg", alt: "Barba Faded con Lineado Preciso" },
        { id: 4, src: "media/Barbas/barba-4.jpeg", alt: "Barba Estilo Silver Fox" },
        { id: 5, src: "media/Barbas/barba-5.jpeg", alt: "Barba Estilo Fresh Fade" },
    ];

    return (
        <section className="text-center pt-30 px-2 w-screen flex flex-col items-center justify-center mx-auto bg-neutral-800">
            <div className="max-w-[1800px]">
                <h1 className="text-4xl font-bold text-red-500">Estilos de Barbas</h1>
                <p className="mt-4 text-lg text-white">Aquí puedes explorar los Estilos de Barbas más populares.</p>
                <ServicesComponent cortes={cortes} />
                <div className="mt-25">
                    <Services currentPage="CortesBarba" />
                </div>
            </div>
        </section>
    );
};

export default CortesBarba;