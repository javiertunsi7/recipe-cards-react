import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerSection">
                    <h3 className="footerTitle">Recetas fáciles</h3>
                    <p className="footerText">
                        Las mejores recetas caseras para toda la familia.
                    </p>
                </div>

                <div className="footerSection">
                    <h4 className="footerSubtitle">Enlaces</h4>
                    <ul className="footerLinks">
                        <li><a href="#" className="footerLink">Sobre nosotros</a></li>
                        <li><a href="#" className="footerLink">Recetas</a></li>
                        <li><a href="#" className="footerLink">Blog</a></li>
                        <li><a href="#" className="footerLink">Contact</a></li>
                    </ul>
                </div>

                <div className="footerSection">
                    <h4 className="footerSubtitle">Síguenos</h4>
                    <div className="socialNetworks">
                        <a href="#" className="socialLink" aria-label="Facebook">📘</a>
                        <a href="#" className="socialLink" aria-label="Instagram">📷</a>
                        <a href="#" className="socialLink" aria-label="Twitter">🐦</a>
                        <a href="#" className="socialLink" aria-label="YouTube">📺</a>
                    </div>
                </div>
            </div>

            <div className="footerCopyright">
                <p>© {currentYear}  Recetas fáciles. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;