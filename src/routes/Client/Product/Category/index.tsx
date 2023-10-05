import './styles.css';

import { NavLink } from 'react-router-dom';

export default function Category() {
    return (
        <nav className="category-container mb20">
            <NavLink
                to="computers"
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
                Computadores
            </NavLink>
            <NavLink
                to="electronics"
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
                Eletrônicos
            </NavLink>
            <NavLink
                to="books"
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
                Livros
            </NavLink>
        </nav>
    );
}