import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";

const CortesDeCabello: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Cortes/Corte-1.jpeg", alt: "Mid Fade / Degrade Medio" },
        { id: 2, src: "media/Cortes/Corte-2.jpeg", alt: "Low Fade / Degrade Bajo" },
        { id: 3, src: "media/Cortes/Corte-3.jpeg", alt: "Hig Fade / Degrade Alto" },
        { id: 4, src: "media/Cortes/Corte-4.jpeg", alt: "Texturado" },
        { id: 5, src: "media/Cortes/Corte-5.jpeg", alt: 'Degrade en "V" con Diseño' },
        { id: 6, src: "media/Cortes/Corte-6.jpeg", alt: 'Degrade en "V" Punta Marcada' },
        { id: 7, src: "media/Cortes/Corte-7.jpeg", alt: 'Degrade en "V"' },
        { id: 8, src: "media/Cortes/Corte-8.jpeg", alt: "Cresta Punta Marcada" },
        { id: 9, src: "media/Cortes/Corte-9.jpeg", alt: "Mullet" },
        { id: 10, src: "media/Cortes/Corte-10.jpeg", alt: "Mullet" },
        { id: 11, src: "media/Cortes/Corte-11.jpeg", alt: "Cresta" },
        { id: 12, src: "media/Cortes/corte-12.jpg", alt: 'Degrade en "V" con Diseño' },
    ];

    return (
        <section className="text-center pt-30 px-2 w-screen flex flex-col items-center justify-center mx-auto bg-neutral-800">
            <div className="max-w-[1800px]">
                <h1 className="text-4xl font-bold text-red-500">Cortes de Cabello</h1>
                <p className="mt-4 text-lg text-white">Aquí puedes explorar los estilos de cortes de cabello más populares.</p>
                <ServicesComponent cortes={cortes} />
                <div className="mt-25">
                    <Services currentPage="CortesDeCabello" />
                </div>
            </div>
        </section>
    );
};

export default CortesDeCabello;