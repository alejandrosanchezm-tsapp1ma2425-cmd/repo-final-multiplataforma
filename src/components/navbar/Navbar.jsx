import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg fondo">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to="/list">Listado</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact">Contactanos</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/aboutus">Sobre nosotros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;