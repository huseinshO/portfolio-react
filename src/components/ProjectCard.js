
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
    return (
        <div className="col-md-4 mb-4">

            <div className="project-card">

                <img
                    src={project.image}
                    className="project-img"
                    alt={project.name}
                />

                <div className="project-body">

                    <h4>{project.name}</h4>

                    <p>{project.description}</p>

                    <div className="project-technologies">
                        <span className="badge bg-primary">
                            {project.technology}
                        </span>
                    </div>

                    <a
                        href={project.link}
                        className="btn btn-outline-primary w-100 mt-3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Project
                    </a>

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;
