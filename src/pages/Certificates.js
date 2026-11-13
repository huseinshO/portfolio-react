
import "../styles/Certificates.css";

function Certificates() {

    const certificates = [
        {
            id: 1,
            name: "Information Security Associate",
            organization: "Semicolon Security",
            description: "Certificate in Information Security."
        },
        {
            id: 2,
            name: "Web Development",
            organization: "Web Development Training",
            description: "Training and practice in web development."
        }
    ];

    return (
        <div className="certificates-section">

            <div className="container">

                <div className="text-center mb-5">

                    <h1 className="certificates-title">
                        My Certificates
                    </h1>

                    <p className="certificates-subtitle">
                        My certifications and achievements
                    </p>

                </div>

                <div className="row">

                    {certificates.map((certificate) => (

                        <div className="col-md-6 mb-4" key={certificate.id}>

                            <div className="certificate-card">

                                <div className="certificate-icon">
                                    <h2>🏆</h2>
                                </div>

                                <div className="certificate-body">

                                    <h4>{certificate.name}</h4>

                                    <h6>{certificate.organization}</h6>

                                    <p>{certificate.description}</p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Certificates;
