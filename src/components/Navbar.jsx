import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div className="navbarLogo">
                    <span className="logoIcon">🍳</span>
                    <span className="logoText">Recetas fáciles</span>
                </div>
                
                <ul className="navbarMenu">
                    <li className="navbarItem">
                        <a href="#" className="navbarLink">Inicio</a>
                    </li>
                    <li className="navbarItem">
                        <a href="#" className="navbarLink">Recetas</a>
                    </li>
                    <li className="navbarItem">
                        <a href="#" className="navbarLink">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;