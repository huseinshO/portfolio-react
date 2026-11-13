
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
    return (
        <div className="App">

            <Navbar />

            <main>

                <section id="home">
                    <Home />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="certificates">
                    <Certificates />
                </section>

                <section id="contact">
                    <Contact />
                </section>

            </main>

            <Footer />

        </div>
    );
}

export default App;
