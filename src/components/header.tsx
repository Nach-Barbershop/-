import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de React Router
import useScroll from '../hooks/useScroll';
import useActiveSection from '../hooks/useActiveSection';

const Header: React.FC = () => {
    const isScrolled = useScroll(50);
    const sectionIds = ['inicio', 'inspiracion', 'precios', 'ubicaciones', 'contacto'];
    const [activeSection, setActiveSectionManually] = useActiveSection(sectionIds);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (id: string) => {
        setActiveSectionManually(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header
            className={`w-screen h-auto fixed z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-neutral-950' : 'bg-gradient-to-b from-black to-transparent'
            }`}
        >
            <div className="flex justify-between items-center text-white">
                {/* Logo */}
                <div className="flex z-50 items-center p-2 pl-0 ml-5 xl:ml-15">
                    <img
                        src="/-/media/Logo.png"
                        alt="Logo"
                        className="h-20 mr-2 img-shadow"
                    />
                    <p className="hidden sm:flex text-lg font-semibold crimsontext tracking-wider ts-xl">
                        NACH <br />
                        BARBERSHOP
                    </p>
                </div>

                {/* Botón Hamburguesa */}
                <button
                    className="lg:hidden mr-10 text-white focus:outline-none z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div
                        className={`w-8 h-1 bg-white my-1.5 rounded transition-transform duration-300 ${
                            menuOpen ? 'rotate-45 translate-y-2.5' : ''
                        }`}
                    ></div>
                    <div
                        className={`w-8 h-1 bg-white my-1.5 rounded transition-opacity duration-300 ${
                            menuOpen ? 'opacity-0' : ''
                        }`}
                    ></div>
                    <div
                        className={`w-8 h-1 bg-white my-1.5 rounded transition-transform duration-300 ${
                            menuOpen ? '-rotate-45 -translate-y-2.5' : ''
                        }`}
                    ></div>
                </button>

                {/* Menú principal */}
                <ul className="hidden lg:flex justify-between items-center w-150 mr-10 font-medium ts-xl xl:mr-20 xl:w-175">
                    {sectionIds.map((id) => (
                        <li
                            key={id}
                            className={`relative font-medium hover:text-red-500 hover:scale-105 hover:underline hover:underline-offset-5 hover:decoration-2 transition-all duration-100 ${
                                activeSection === id
                                    ? 'text-red-500 underline underline-offset-5 decoration-2 scale-105'
                                    : ''
                            }`}
                        >
                            <Link to={`/#${id}`} onClick={() => handleClick(id)}>
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Menú móvil */}
                <div
                    className={`lg:hidden fixed z-20 top-0 left-0 w-full h-110 bg-neutral-950 text-white flex flex-col items-center justify-end space-y-8 pb-10 transform ${
                        menuOpen ? 'translate-y-0' : '-translate-y-full'
                    } transition-transform duration-500`}
                >
                    {sectionIds.map((id) => (
                        <Link
                            key={id}
                            to={`/#${id}`}
                            className={`text-2xl ${
                                activeSection === id ? 'text-red-500 underline' : ''
                            }`}
                            onClick={() => handleClick(id)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;