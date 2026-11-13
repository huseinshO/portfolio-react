
import "../styles/Skills.css";

function Skills() {
    const skills = [
        {
            id: 1,
            name: "HTML",
            description: "Building the structure of web pages.",
            category: "Frontend Development"
        },
        {
            id: 2,
            name: "CSS",
            description: "Styling and designing responsive websites.",
            category: "Frontend Development"
        },
        {
            id: 3,
            name: "JavaScript",
            description: "Creating interactive web applications.",
            category: "Frontend Development"
        },
        {
            id: 4,
            name: "React",
            description: "Building reusable UI components.",
            category: "Frontend Development"
        },
        {
            id: 5,
            name: "Bootstrap",
            description: "Creating responsive website layouts.",
            category: "Frontend Development"
        },
        {
            id: 6,
            name: "PHP",
            description: "Developing server-side web applications.",
            category: "Backend Development"
        },
        {
            id: 7,
            name: "C#",
            description: "Programming and application development.",
            category: "Programming"
        },
        {
            id: 8,
            name: "Flutter & Dart",
            description: "Developing cross-platform applications.",
            category: "Mobile Development"
        },
        {
            id: 9,
            name: "Cybersecurity",
            description: "Web security and vulnerability research.",
            category: "Cybersecurity"
        }
    ];

    return (
        <div className="skills-section">

            <div className="container">

                <div className="text-center mb-5">
                    <h1 className="skills-title">My Skills</h1>
                    <p className="skills-subtitle">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="row">

                    {skills.map((skill) => (

                        <div className="col-md-4 col-sm-6 mb-4" key={skill.id}>

                            <div className="skill-card">

                                <h4>{skill.name}</h4>

                                <span className="badge bg-primary mb-3">
                                    {skill.category}
                                </span>

                                <p>{skill.description}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Skills;
