
import "../styles/About.css";

function About() {
    return (
        <div className="about-section">

            <div className="container">

                <div className="text-center mb-5">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-subtitle">
                        Get to know more about me
                    </p>
                </div>

                <div className="row align-items-center">

                    <div className="col-md-5 text-center">

                        <div className="about-image">
                            <h2>HS</h2>
                            <p>Hussein Shaker</p>
                        </div>

                    </div>

                    <div className="col-md-7">

                        <h2>Hello, I'm Hussein Shaker</h2>

                        <p className="about-description">
                            I am a Management Information Systems student
                            with a strong interest in Web Development
                            and Cybersecurity.
                        </p>

                        <p className="about-description">
                            I enjoy creating websites, developing
                            applications, and learning new technologies.
                            I am always looking to improve my skills
                            and gain more experience.
                        </p>

                        <div className="about-info">

                            <p><strong>Name:</strong> Hussein Shaker</p>

                            <p><strong>Education:</strong> MIS Student - IUL</p>

                            <p><strong>Field:</strong> Web Development</p>

                            <p><strong>Interest:</strong> Cybersecurity</p>

                        </div>

                    </div>

                </div>

                <div className="row mt-5">

                    <div className="col-md-4 mb-3">
                        <div className="about-card">
                            <h4>Web Development</h4>
                            <p>
                                Building responsive and modern websites
                                using different web technologies.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="about-card">
                            <h4>Cybersecurity</h4>
                            <p>
                                Interested in information security,
                                vulnerability research and web security.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="about-card">
                            <h4>Continuous Learning</h4>
                            <p>
                                Always learning new technologies
                                and improving my technical skills.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;
