import React from "react";

const Sucursales: React.FC = () => {
    
    return (
        <section id="ubicaciones" className='w-screen h-auto bg-neutral-900 flex flex-col items-center justify-center py-[50px]'>
        
            <div className='w-screen h-auto flex flex-col items-center justify-center mb-[50px] text-center'>
                <h3 className="text-[36px] md:text-[40px] font-semibold text-white ts-sm mx-4">NUESTRAS SUCURSALES</h3>
                <div className="h-1 bg-red-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div className="grid grid-cols-1 gap-15 mx-10 md:grid-cols-2">
                <div>
                    <img src="/-/media/sucursal-1.jpeg" alt="" className="w-[450px] h-[300px] rounded-2xl mb-[15px]"/>
                    
                    <div className="block sm:flex md:block lg:flex items-center justify-between">
                        <div className="mb-3 flex lg:mb-0">
                            <img src="/-/media/marcador.png" alt="" className="h-[40px] aspect-square mr-2"/>
                            <div>
                                <p className="text-white font-semibold">Calle 32 entre 3 y 4</p>
                                <p className="text-white">Galería Aldea Paseo del Mar</p>
                            </div>
                        </div>
                        
                        <a href="https://www.google.com.ar/maps/place/Nach+BarberShop/@-36.5350375,-56.6915225,21z/data=!4m6!3m5!1s0x959c1374f45f3a01:0x11f720f92bc61bf4!8m2!3d-36.5350339!4d-56.6914461!16s%2Fg%2F11sv_rbp7n?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex w-max items-center bg-white py-1 px-3 rounded-4xl">
                            <img src="/-/media/camino.png" alt="" className="h-[30px] aspect-square mr-1 "/>
                            <p className="font-semibold transform scale-y-120">Como llegar</p>
                        </a>
                    
                    </div>
                </div>

                <div>
                    <img src="/-/media/sucursal-2.png" alt="" className="w-[450px] h-[300px] rounded-2xl mb-[15px]"/>
                    
                    <div className="block sm:flex md:block lg:flex items-center justify-between">
                        <div className="mb-3 flex lg:mb-0">
                            <img src="/-/media/marcador.png" alt="" className="h-[40px] aspect-square mr-2"/>
                            <div>
                                <p className="text-white font-semibold">Calle 2 entre 37 y 38</p>
                                <p className="text-white">Galería del Teatro</p>
                            </div>
                        </div>
                        
                        <a href="https://www.google.com.ar/maps/@-36.5410252,-56.6898915,20.21z?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex w-max items-center bg-white py-1 px-3 rounded-4xl">
                            <img src="/-/media/camino.png" alt="" className="h-[30px] aspect-square mr-1 "/>
                            <p className="font-semibold transform scale-y-120">Como llegar</p>
                        </a>
                    
                    </div>
                </div>

            </div>
        
        </section>
    );
}

export default Sucursales;