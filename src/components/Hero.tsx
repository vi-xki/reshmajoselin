import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div className="container">
                <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>

                    {/* Left: Text Content */}
                    <div className="fade-in">
                        <div className="badge mb-24">
                            Software Testing & IT Analyst
                        </div>

                        <h1 className="mb-24">
                            Hi, I'm <br />
                            <span className="gradient-text">Reshma Joselin</span>
                        </h1>

                        <p className="mb-32" style={{ maxWidth: '600px', fontSize: '1.25rem' }}>
                            Motivated professional skilled in Functional Testing, API Testing,
                            Performance Testing, and ERP System Support.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Contact Me
                            </a>
                            <a href="#projects" className="btn btn-outline">
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="https://linkedin.com/in/reshmajoselin" target="_blank" rel="noopener noreferrer"
                                style={{ width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
                                <Linkedin size={24} style={{ color: '#0A66C2' }} />
                            </a>
                            <a href="https://github.com/ReshmaJoselin123" target="_blank" rel="noopener noreferrer"
                                style={{ width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
                                <Github size={24} style={{ color: '#181717' }} />
                            </a>
                            <a href="mailto:reshmajoselin26@gmail.com"
                                style={{ width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
                                <Mail size={24} style={{ color: '#FF1B6B' }} />
                            </a>
                            <a href="tel:6379052204"
                                style={{ width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
                                <Phone size={24} style={{ color: '#8B5CF6' }} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="fade-in delay-2 profile-circle" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '400px',
                            height: '400px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #FF1B6B 0%, #8B5CF6 50%, #3B82F6 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 60px rgba(255, 27, 107, 0.3)',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '380px',
                                height: '380px',
                                borderRadius: '50%',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '120px', fontWeight: '900' }} className="gradient-text">RJ</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                /* Hide profile circle on mobile and tablet */
                @media (max-width: 1023px) {
                    .profile-circle {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
