import '../styles/components/Navbar.css'; // Importation des styles spécifiques à la navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">HM</div>
            <ul className="nav-links">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
