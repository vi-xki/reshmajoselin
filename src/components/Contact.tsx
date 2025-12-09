import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" style={{ background: 'white' }}>
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
                <div className="section-title">
                    <h2 className="gradient-text">Get In Touch</h2>
                </div>

                <div className="grid grid-3" style={{ maxWidth: '1000px', margin: '0 auto 60px' }}>
                    <div className="card text-center fade-in">
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #FF1B6B 0%, #FF6B9D 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                            boxShadow: '0 8px 24px rgba(255, 27, 107, 0.2)'
                        }}>
                            <Mail size={28} style={{ color: 'white' }} />
                        </div>
                        <p style={{ fontWeight: '600', marginBottom: '8px', color: '#1F2937' }}>Email</p>
                        <a href="mailto:reshmajoselin26@gmail.com" style={{ color: '#6B7280', fontSize: '0.9375rem' }}>
                            reshmajoselin26@gmail.com
                        </a>
                    </div>

                    <div className="card text-center fade-in delay-1">
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)'
                        }}>
                            <Phone size={28} style={{ color: 'white' }} />
                        </div>
                        <p style={{ fontWeight: '600', marginBottom: '8px', color: '#1F2937' }}>Phone</p>
                        <a href="tel:6379052204" style={{ color: '#6B7280', fontSize: '0.9375rem' }}>
                            +91 6379052204
                        </a>
                    </div>

                    <div className="card text-center fade-in delay-2">
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.2)'
                        }}>
                            <MapPin size={28} style={{ color: 'white' }} />
                        </div>
                        <p style={{ fontWeight: '600', marginBottom: '8px', color: '#1F2937' }}>Location</p>
                        <p style={{ color: '#6B7280', fontSize: '0.9375rem' }}>Tirunelveli, Tamil Nadu</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px' }}>
                    <a href="https://linkedin.com/in/reshmajoselin" target="_blank" rel="noopener noreferrer"
                        style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: '#0A66C2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 12px rgba(10, 102, 194, 0.3)'
                        }}>
                        <Linkedin size={24} style={{ color: 'white' }} />
                    </a>
                    <a href="https://github.com/ReshmaJoselin123" target="_blank" rel="noopener noreferrer"
                        style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: '#181717',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 12px rgba(24, 23, 23, 0.3)'
                        }}>
                        <Github size={24} style={{ color: 'white' }} />
                    </a>
                </div>

                <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid #E5E7EB' }}>
                    <p style={{ color: '#9CA3AF', fontSize: '0.9375rem' }}>
                        © 2024 Reshma Joselin. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
