import './styles.css';

import homeIcon from '../../assets/images/home.svg';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="main-header mb20">
            <div className="container header-content">
                <nav className="navigation">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    >
                        Início
                    </NavLink>
                    <NavLink
                        to="/product"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
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
