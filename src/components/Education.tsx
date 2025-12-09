import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const certifications = [
        "IBM Professional Excellence – IoT & Smart Cities",
        "Generative AI for Beginners (Udemy)",
        "Prompt Engineering Bootcamp (Udemy)",
        "Machine Learning Using Python"
    ];

    return (
        <section id="education" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="container">
                <div className="section-title">
                    <h2 className="gradient-text">Education & Certifications</h2>
                </div>

                <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Education */}
                    <div className="card fade-in">
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #FF1B6B 0%, #FF6B9D 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                            boxShadow: '0 8px 24px rgba(255, 27, 107, 0.2)'
                        }}>
                            <GraduationCap size={36} style={{ color: 'white' }} />
                        </div>

                        <h3 className="mb-16" style={{ fontSize: '1.5rem' }}>B.Tech - CSE (IoT)</h3>
                        <p className="mb-16" style={{ fontSize: '1.125rem', color: '#6B7280' }}>
                            Kalasalingam Academy of Research & Education
                        </p>
                        <p className="mb-24" style={{ color: '#9CA3AF' }}>2020 – 2024</p>

                        <div style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.2) 100%)',
                            borderRadius: '50px',
                            color: '#10B981',
                            fontWeight: '600'
                        }}>
                            CGPA: 8.2
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="card fade-in delay-1">
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)'
                        }}>
                            <Award size={36} style={{ color: 'white' }} />
                        </div>

                        <h3 className="mb-24" style={{ fontSize: '1.5rem' }}>Certifications</h3>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {certifications.map((cert, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    gap: '12px',
                                    marginBottom: '16px',
                                    color: '#6B7280',
                                    fontSize: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    <span style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                                        flexShrink: 0,
                                        marginTop: '8px'
                                    }}></span>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
