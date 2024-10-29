import '../styles/pages/Home.css';
import Button from '../components/Button'; // Import du composant Button

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="home-title-container">
                    <h1>Bonjour, je suis Hugo</h1>
                </div>
                <p>Développeur Full-Stack, je m'épanouis dans la création de projets de A à Z, en m'occupant autant de
                    la partie front-end que back-end. J'aime donner vie à des idées, tout en restant à l'écoute pour
                    répondre aux besoins spécifiques de chaque projet.</p>
                <div className="home-buttons">
                    <Button onClick={() => window.location.href = "#projects"} variant="primary">Voir mes projets</Button>
                    <Button onClick={() => window.location.href = "#contact"} variant="primary">Contactez-moi</Button>
                </div>
            </div>
        </section>
    );
};

export default Home;
