import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";

const DiseñosCabello: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Diseños/diseño-1-copia.jpg", alt: "Diseño con Línea Lateral" },
        { id: 2, src: "media/Diseños/diseño-2.jpg", alt: "Diseño con Triple Línea" },
        { id: 3, src: "media/Diseños/diseño-3.jpg", alt: "Diseño Cruz en Lateral" },
        { id: 4, src: "media/Diseños/diseño-4.jpg", alt: "Diseño de Relámpago" },
        { id: 5, src: "media/Diseños/diseño-5.jpg", alt: "Diseño de Doble Línea Curva" },
        { id: 6, src: "media/Diseños/diseño-6.jpg", alt: "Diseño Punta con Textura" },
        { id: 7, src: "media/Diseños/diseño-7.jpg", alt: "Diseño de Llamas" },
        { id: 8, src: "media/Diseños/diseño-9.jpg", alt: "Diseño Minimalista" },
        { id: 9, src: "media/Diseños/diseño-10.jpg", alt: "Diseño en Espiral" },
        { id: 10, src: "media/Diseños/diseño-11.jpg", alt: "Diseño Curvas Laterales" },
        { id: 11, src: "media/Diseños/diseño-12.jpg", alt: "Diseño con Líneas Paralelas" },
        { id: 12, src: "media/Diseños/diseño-13.jpg", alt: "Diseño de Línea y Sombra" },
        { id: 13, src: "media/Diseños/diseño-14.jpg", alt: "Diseño Desvanecido con Detalles" },
    ];

    return (
        <section className="text-center pt-30 px-2 w-screen flex flex-col items-center justify-center mx-auto bg-neutral-800">
            <div className="max-w-[1800px]">
                <h1 className="text-4xl font-bold text-red-500">Diseños para Cabello</h1>
                <p className="mt-4 text-lg text-white">Aquí puedes explorar los estilos de Diseños para Cabello más populares.</p>
                <ServicesComponent cortes={cortes} />
                <div className="mt-25">
                    <Services currentPage="DiseñosCabello" />
                </div>
            </div>
        </section>
    );
};

export default DiseñosCabello;