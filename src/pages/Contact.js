
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setSubmitted(false);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

    };

    return (
        <div className="contact-section">

            <div className="container">

                <div className="text-center mb-5">

                    <h1 className="contact-title">
                        Contact Me
                    </h1>

                    <p className="contact-subtitle">
                        Feel free to contact me anytime
                    </p>

                </div>

                <div className="row">

                    <div className="col-md-5 mb-4">

                        <div className="contact-info">

                            <h3>Get In Touch</h3>

                            <p>
                                Have a question or want to work together?
                                Send me a message.
                            </p>

                            <div className="contact-item">
                                <h5>Email</h5>
                                <p>husseinshokorl@gmail.com</p>
                            </div>

                            <div className="contact-item">
                                <h5>Location</h5>
                                <p>Lebanon</p>
                            </div>

                            <div className="contact-item">
                                <h5>Profession</h5>
                                <p>Web Developer</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-7">

                        {submitted && (
                            <div className="alert alert-success">
                                Your message has been submitted successfully!
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="contact-form"
                        >

                            <div className="mb-3">

                                <label className="form-label">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;
