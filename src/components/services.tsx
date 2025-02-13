import React from 'react';
import Card from './card';

interface ServicesProps {
    currentPage?: string; // Identifica la página actual
}

const Services: React.FC<ServicesProps> = ({ currentPage }) => {
    const cards = [
        {
            id: 'CortesDeCabello',
            image: '/-/media/Cortes/corte-12.jpg',
            text: 'CORTES DE CABELLO',
            link: '/CortesDeCabello',
        },
        {
            id: 'CortesBarba',
            image: '/-/media/Barbas/barba-1.jpeg',
            text: 'ESTILOS DE BARBA',
            link: '/CortesBarba',
        },
        {
            id: 'DiseñosCabello',
            image: '/-/media/Diseños/diseño-1.jpg',
            text: 'GALERÍA DE DISEÑOS',
            link: '/DiseñosCabello',
        },
        {
            id: 'Productos',
            image: '/-/media/Productos/productos7.jpeg',
            text: 'PRODUCTOS',
            link: '/Productos',
        },
    ];

    // Si currentPage es "Inicio" o está vacío, solo mostramos las demás tarjetas sin la de Inicio
    const updatedCards =
        currentPage === 'Inicio' || !currentPage
            ? cards // Excluye la tarjeta de "Inicio"
            : [
                    {
                        id: 'Inicio',
                        image: '/-/media/background.jpg',
                        text: 'INICIO',
                        link: '/#inicio',
                    },
                    ...cards.filter((card) => card.id !== currentPage), // Excluir la tarjeta de la página actual
                ];

    return (
        <section className="w-screen flex flex-col items-center relative">
            <div className="w-[90vw] -translate-y-15 flex flex-col justify-start align-center text-center text-white">
                <div id="inspiracion" className="bg-neutral-900 pt-[50px] pb-[75px] w-[90vw] mx-auto max-w-[1400px]">
                    <div className="text-center text-white mb-8">
                        <h3 className="text-[36px] md:text-[40px] font-semibold mx-5">EXPLORA LO MEJOR DEL ESTILO MASCULINO</h3>
                        <div className="h-1 bg-red-600 w-75 mx-auto mt-2 rounded-4xl"></div>
                    </div>
                    <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {updatedCards.map((card, index) => (
                            <Card key={index} image={card.image} text={card.text} link={card.link} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;