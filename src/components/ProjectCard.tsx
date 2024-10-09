interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Technologies :</strong> {technologies.join(', ')}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
    );
};

export default ProjectCard;
