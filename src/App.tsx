import './App.css';
import Header from './components/header';
import Main from './components/main';
import Services from './components/services';
import Prices from './components/prices';
import Sucursales from './components/sucursales';
import Footer from './components/footer';

import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ScrollToTop from './hooks/ScrollToTop';

import CortesDeCabello from './components/services-links/CortesDeCabello';
import CortesBarba from './components/services-links/CortesBarba';
import DiseñosCabello from './components/services-links/DiseñosCabello';
import Productos from './components/services-links/Productos';

import AdminPage from './components/AdminPage';

const ScrollToHash: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
};

const Login: React.FC<{ onLogin: (password: string) => void }> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Para redirigir tras iniciar sesión

    const handleLogin = () => {
        if (password === 'admin123') {
            onLogin(password);
            navigate('/admin'); // Redirigir automáticamente
        } else {
            alert('Contraseña incorrecta');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
            <input
                type="password"
                placeholder="Ingrese contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mb-4"
            />
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Ingresar
            </button>
        </div>
    );
};

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem("auth") === "true"
    );

    const handleLogin = (password: string) => {
        if (password === 'admin123') {
            setIsAuthenticated(true);
            sessionStorage.setItem("auth", "true");
        } else {
            alert('Contraseña incorrecta');
        }
    };

    return (
        <Router>
            <ScrollToTop />
            <ScrollToHash />
            <Header />

            <Routes>
                {/* Ruta principal */}
                <Route
                    path="/"
                    element={
                        <>
                            <Main />
                            <Services currentPage="Inicio" />
                            <Prices />
                            <Sucursales />
                        </>
                    }
                />
                {/* Rutas de servicios */}
                <Route path="/CortesDeCabello" element={<CortesDeCabello />} />
                <Route path="/CortesBarba" element={<CortesBarba />} />
                <Route path="/DiseñosCabello" element={<DiseñosCabello />} />
                <Route path="/Productos" element={<Productos />} />
                
                {/* Ruta del Admin Panel */}
                <Route
                    path="/admin"
                    element={
                        isAuthenticated ? (
                            <AdminPage />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )
                    }
                />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;