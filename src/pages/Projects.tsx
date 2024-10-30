import '../styles/pages/Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    const projects = [

        {
            title: 'Portfolio personnel',
            description: 'Portfolio de développeur full-stack avec des projets variés, utilisant des technologies modernes côté front-end et back-end.',
            technologies: ['React', 'TypeScript', 'CSS'],
            link: 'https://github.com/MercurinH/portfolio-hugo'
        },
        {
            title: 'Mercurin Solutions',
            description: 'Développement web, mobile, et logiciel. Services de consulting pour des solutions digitales sur mesure.',
            technologies: ['React', 'Java', 'Spring Boot', 'Outils de développement web et mobile'],
            link: ''
        },
        {
            title: 'Synapzse',
            description: 'Participation au développement d\'une application de gestion d\'événements, intégrant la planification, l\'inscription et le suivi des participants.',
            technologies: ['React', 'Java', 'TypeScript', 'Spring', 'PostgreSQL', 'Docker'],
            link: 'https://github.com/Synapzse'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>Mes Projets</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
