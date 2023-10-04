import './styles.css';

import { Link } from "react-router-dom";

export default function Category() {
    return (
        <nav>
            <Link to="computers">Computers</Link>
            <Link to="electronics">Electronics</Link>
            <Link to="books">Books</Link>
        </nav>
    );
}