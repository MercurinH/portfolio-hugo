import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Gestionnaire de tâches',
            description: 'Application permettant la gestion de tâches en temps réel.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            link: 'https://github.com/ton-projet'
        },
        {
            title: 'Portfolio personnel',
            description: 'Mon portfolio de développeur full-stack.',
            technologies: ['React', 'TypeScript', 'CSS'],
            link: 'https://github.com/ton-portfolio'
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
