import './styles.css';
import homeIcon from '../../assets/images/home.svg';
import { NavLink, Link, useLocation } from 'react-router-dom';

import { knownRoutes } from '../../routes/config/routesConfig';

export default function Header() {
    const location = useLocation();
    const isNotFoundRoute = !knownRoutes.includes(location.pathname);

    return (
        <header className="main-header mb20">
            <div className="container header-content">
                <nav className="navigation">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isNotFoundRoute ? "nav-link" : isActive ? "nav-link active-link" : "nav-link"}
                    >
                        Início
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => isNotFoundRoute ? "nav-link" : isActive ? "nav-link active-link" : "nav-link"}
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isNotFoundRoute ? "nav-link" : isActive ? "nav-link active-link" : "nav-link"}
                    >
                        Sobre nós
                    </NavLink>
                </nav>
                <div className="icon-container">
                    <Link to="/"><img src={homeIcon} alt="Home" /></Link>
                </div>
            </div>
        </header>
    );
}