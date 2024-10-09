import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="container">
                <h1>Bonjour, je suis Hugo</h1>
                <p>Développeur Full-Stack, je m'épanouis dans la création de projets de A à Z, en m'occupant autant de
                    la partie front-end que back-end. J'aime donner vie à des idées, tout en restant à l'écoute pour
                    répondre aux besoins spécifiques de chaque projet.</p>
                <a href="#projects" className="cta-button">Voir mes projets</a>
                <a href="#contact" className="cta-button secondary">Contactez-moi</a>
            </div>
        </section>
    );
};

export default Home;
