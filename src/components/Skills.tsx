import { Code, TestTube, Wrench, Lightbulb } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Testing & QA",
            icon: <TestTube size={32} />,
            gradient: "linear-gradient(135deg, #FF1B6B 0%, #FF6B9D 100%)",
            skills: ["Manual Testing", "Functional Testing", "API Testing (Postman)", "Apache JMeter", "Selenium", "Jira"]
        },
        {
            title: "SAP Technology",
            icon: <Wrench size={32} />,
            gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
            skills: ["ERP Business Process", "SAP Functional (MM/SD)", "Issue Workflow", "User Support"]
        },
        {
            title: "Programming & DB",
            icon: <Code size={32} />,
            gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
            skills: ["Python", "JavaScript", "MySQL", "MongoDB", "HTML/CSS"]
        },
        {
            title: "Soft Skills",
            icon: <Lightbulb size={32} />,
            gradient: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
            skills: ["Problem Solving", "Documentation", "Teamwork", "Critical Thinking", "Communication"]
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <div className="section-title">
                    <h2 className="gradient-text">Skills & Expertise</h2>
                </div>

                <div className="grid grid-4">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div style={{
                                width: '72px',
                                height: '72px',
                                borderRadius: '20px',
                                background: category.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                color: 'white',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                            }}>
                                {category.icon}
                            </div>

                            <h3 className="mb-24" style={{ fontSize: '1.5rem' }}>{category.title}</h3>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '12px',
                                        color: '#6B7280',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: category.gradient,
                                            flexShrink: 0
                                        }}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
