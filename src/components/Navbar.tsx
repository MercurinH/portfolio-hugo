import { Link } from 'react-scroll';  // Utilisé pour le scroll entre les sections

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="home" smooth={true} duration={500}>Accueil</Link></li>
                <li><Link to="about" smooth={true} duration={500}>À propos</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projets</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
