
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-section">

            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-7">

                        <h5 className="home-subtitle">
                            Welcome to my portfolio
                        </h5>

                        <h1 className="home-title">
                            Hi, I'm <span>Hussein Shaker</span>
                        </h1>

                        <h3 className="home-role">
                            Web Developer & Cybersecurity Researcher
                        </h3>

                        <p className="home-description">
                            I am passionate about web development and
                            cybersecurity. I enjoy building modern websites
                            and learning new technologies.
                        </p>

                        <div className="home-buttons">

                            <a href="#about" className="btn btn-primary me-3">
                                About Me
                            </a>

                            <a href="#projects" className="btn btn-outline-light">
                                View Projects
                            </a>

                        </div>

                    </div>

                    <div className="col-md-5 text-center">

                        <div className="home-image">
                            <h2>HS</h2>
                            <p>Developer</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;
