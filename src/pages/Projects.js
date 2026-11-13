
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        const data = [
            {
                id: 1,
                name: "RaBeautyCare",
                description: "A full stack web development project.",
                technology: "HTML, CSS, PHP",
                image: "https://picsum.photos/400/250?random=1",
                link: "#"
            },
            {
                id: 2,
                name: "Personal Portfolio",
                description: "A personal portfolio website to showcase my skills and projects.",
                technology: "React & Bootstrap",
                image: "https://picsum.photos/400/250?random=2",
                link: "#"
            },
            {
                id: 3,
                name: "React Practice Projects",
                description: "Small applications built to practice React components and hooks.",
                technology: "React & JavaScript",
                image: "https://picsum.photos/400/250?random=3",
                link: "#"
            }
        ];

        setProjects(data);

    }, []);

    return (
        <div className="projects-section">

            <div className="container">

                <div className="text-center mb-5">

                    <h1 className="projects-title">
                        My Projects
                    </h1>

                    <p className="projects-subtitle">
                        Some of my recent work
                    </p>

                </div>

                <div className="row">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Projects;
