import { useState, useEffect } from 'react';
import '../styles/components/Navbar.css';
import MenuBurger from "./MenuBurger.tsx";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 } // Detecter la section visible
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">HM</div>
            <MenuBurger isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li className={activeSection === 'home' ? 'active' : ''}>
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Accueil</a>
                </li>
                <li className={activeSection === 'about' ? 'active' : ''}>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>À propos</a>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projets</a>
                </li>
                <li className={activeSection === 'contact' ? 'active' : ''}>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;