import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>À propos de moi</h2>
                <p>Je suis Hugo Mercurin, développeur Full-Stack avec plus de 3 ans d'expérience. Mon parcours, du DUT
                    en Informatique jusqu'à un Master MIAGE, m'a permis d'acquérir des compétences variées et solides.
                    J'ai eu l'opportunité de travailler sur différents projets en tant qu'ingénieur d'études et
                    développement, ce qui m'a offert une belle diversité d'expériences.</p>

                <p>Au fil de mes expériences, j'ai acquis des compétences solides en développement front-end et
                    back-end, notamment avec Java, JavaScript, React, Angular et Spring Boot. J'ai travaillé sur des
                    projets complexes dans les secteurs de la mutuelle, de l'assurance et de la retraite, où j'ai mené
                    des développements d'API, l'intégration de services, ainsi que la gestion d'anomalies et la
                    maintenance évolutive des systèmes.</p>

                <p>Je suis curieux et autonome, avec un réel goût pour le travail d'équipe et une approche agile. J'aime
                    suivre un projet du début à la fin, en veillant toujours à rester à l'écoute des besoins de chaque
                    client.</p>

                <p>Voici un aperçu des technologies et outils que j'utilise régulièrement :</p>
                <ul>
                    <li><strong>Front-end</strong> : React, Angular, JavaScript, TypeScript</li>
                    <li><strong>Back-end</strong> : Java, Spring Boot, API REST, Spring Batch</li>
                    <li><strong>Bases de données</strong> : SQL, MarkLogic, MongoDB, PostgreSQL</li>
                    <li><strong>Outils</strong> : Docker, Git, Maven, CI/CD</li>
                </ul>

                <p>En dehors du développement, je m'intéresse beaucoup aux nouvelles technologies, que je suis à travers
                    une veille régulière. Je consacre aussi du temps à mes autres passions, notamment le sport, la
                    musique et l'art sous toutes ses formes.</p>
            </div>
        </section>
    );
}

export default About;