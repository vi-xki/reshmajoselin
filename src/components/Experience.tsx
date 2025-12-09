import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="container">
                <div className="section-title">
                    <h2 className="gradient-text">Work Experience</h2>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Job Offer */}
                    <div className="card fade-in" style={{ borderLeft: '6px solid #FF1B6B' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 20px',
                            background: 'linear-gradient(135deg, rgba(255, 27, 107, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%)',
                            borderRadius: '50px',
                            marginBottom: '24px'
                        }}>
                            <Award size={18} style={{ color: '#FF1B6B' }} />
                            <span style={{ color: '#FF1B6B', fontWeight: '600', fontSize: '0.875rem' }}>Job Offer</span>
                        </div>

                        <h3 className="mb-16" style={{ fontSize: '1.75rem' }}>IT Analyst (SAP Technology)</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <Briefcase size={20} style={{ color: '#8B5CF6' }} />
                            <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#8B5CF6' }}>Johnson Controls (India) Pvt. Ltd.</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280' }}>
                                <MapPin size={16} />
                                <span>Pune</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280' }}>
                                <Calendar size={16} />
                                <span>Offer Received: Sep 2025</span>
                            </div>
                        </div>

                        <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
                            SAP Functional Support & ERP Quality Assurance
                        </p>
                    </div>

                    {/* Internship */}
                    <div className="card fade-in delay-1" style={{ borderLeft: '6px solid #3B82F6' }}>
                        <h3 className="mb-16" style={{ fontSize: '1.75rem' }}>Testing & Quality Assurance Intern</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <Briefcase size={20} style={{ color: '#3B82F6' }} />
                            <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#3B82F6' }}>CapTechIn Pvt. Ltd.</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px', color: '#6B7280' }}>
                            <Calendar size={16} />
                            <span>Feb 2025 – Jun 2025</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                "Performed functional and API testing for GeoHunt360 mobile application",
                                "Automated API test collections using Postman, improving execution speed by 30%",
                                "Conducted performance testing using JMeter, identifying failure at 500+ concurrent users",
                                "Reported and tracked defects in Jira, reducing resolution time by 20%"
                            ].map((item, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    gap: '16px',
                                    marginBottom: '16px',
                                    color: '#6B7280',
                                    fontSize: '1.0625rem',
                                    lineHeight: '1.7'
                                }}>
                                    <TrendingUp size={20} style={{ color: '#3B82F6', flexShrink: 0, marginTop: '2px' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
