import '../styles/components/Footer.css'; // Importation des styles spécifiques au footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Hugo Mercurin. Tous droits réservés.</p>
            <div className="footer-links">
                <a href="https://github.com/MercurinH" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/hugo-mercurin-513475143/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
