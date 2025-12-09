import { Github, ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-title">
                    <h2 className="gradient-text">Featured Projects</h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card fade-in" style={{ overflow: 'hidden', padding: 0 }}>
                        {/* Project Header with Gradient */}
                        <div style={{
                            height: '280px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '4px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
                            }}>
                                <Eye size={56} style={{ color: 'white' }} />
                            </div>
                        </div>

                        {/* Project Content */}
                        <div style={{ padding: '40px' }}>
                            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                                <span style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.2) 100%)',
                                    color: '#3B82F6',
                                    fontWeight: '600',
                                    fontSize: '0.875rem'
                                }}>Python</span>
                                <span style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.2) 100%)',
                                    color: '#8B5CF6',
                                    fontWeight: '600',
                                    fontSize: '0.875rem'
                                }}>OpenCV</span>
                                <span style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(135deg, rgba(255, 27, 107, 0.1) 0%, rgba(255, 27, 107, 0.2) 100%)',
                                    color: '#FF1B6B',
                                    fontWeight: '600',
                                    fontSize: '0.875rem'
                                }}>MediaPipe</span>
                            </div>

                            <h3 className="mb-24" style={{ fontSize: '2rem' }}>
                                Eye Gaze-Controlled System
                            </h3>

                            <p className="mb-32" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                                Built real-time eye tracking system using MediaPipe, OpenCV & PyAutoGUI to control
                                mouse movement hands-free for differently abled users. This innovative solution enables
                                accessibility through computer vision technology.
                            </p>

                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a href="#" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    background: 'linear-gradient(135deg, #FF1B6B 0%, #8B5CF6 100%)',
                                    color: 'white',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}>
                                    <Github size={20} />
                                    View Code
                                </a>
                                <a href="#" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    background: 'transparent',
                                    color: '#6B7280',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    border: '2px solid #E5E7EB',
                                    transition: 'all 0.3s'
                                }}>
                                    <ExternalLink size={20} />
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
