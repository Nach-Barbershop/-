import React from 'react';

const Hero: React.FC = () => {
    return (
        <main id='inicio' className="bg-[url('/nach-barber-new/media/background.jpg')] h-screen bg-cover bg-center">
            <section className="bg-black/50 bg-center h-screen w-screen flex flex-col justify-center items-center text-white ts-xl">
                <img src="/nach-barber-new/media/Logo.png" alt="Logo" className="w-35 mb-[4vh] img-shadow mx-5" />
                <h1 className="text-5xl text-center font-bold crimsontext mb-[2vh] ts-xl mx-5">NACH BARBERSHOP</h1>
                <h2 className="text-3xl font-bold mb-[1vh] text-shadow-xl ts-xl mx-5">SANTA TERESITA</h2>

                <div className="block sm:flex justify-between items-center font-medium mx-5">
                    <div className="flex items-center my-3 sm:my-0 w-[275px]">
                        <img src="/nach-barber-new//media/marcador.png" alt="Marcador" className="mr-2 h-10 w-10" />
                        <div>
                            <p className='font-bold'>Calle 32 entre 3 y 4</p>
                            <p>Galería Aldea Paseo del Mar</p>
                        </div>
                    </div>

                    <hr className="hidden sm:flex h-13 w-0.5 bg-white rounded-xl opacity-70 ml-4 mr-4" />

                    <div className="flex items-center w-[275px]">
                        <img src="/nach-barber-new//media/marcador.png" alt="Marcador" className="mr-2 h-10 w-10" />
                        <div>
                            <p className='font-bold'>Calle 2 entre 37 y 38</p>
                            <p>Galería del Teatro</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;