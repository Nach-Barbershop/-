import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-950 flex items-center justify-center">
            <section id='contacto' className="bg-neutral-950 w-screen max-w-[1400px] flex-col align-center flex justify-center py-10 md:flex-row md:justify-between md:items-start md:px-10">
                <div className="text-white p-2 flex align-center flex-col justify-center text-center">
                    <img
                        src="/nach-barber-new/media/Logo.png"
                        alt="Logo"
                        className="h-25 mb-2 img-shadow mx-auto"
                    />
                    <p className="text-2xl font-semibold crimsontext tracking-wider ts-xl">
                        NACH <br />
                        BARBERSHOP
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                    <h2 className="text-3xl font-bold mb-4 text-white text-center">Contacto</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://www.instagram.com/nachbarbershop/" target="_blank">
                            <img src="/nach-barber-new/media/instagram.png" alt="" className="h-13"/>
                        </a>
                        <a href="https://wa.me/5491155862570" target="_blank">
                            <img src="/nach-barber-new/media/whatsapp.png" alt="" className="h-13 rounded-[12px]"/>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;