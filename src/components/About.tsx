const About = () => {
    return (
        <section id="about" className="bg-white/50">
            <div className="container">
                <div className="section-title">
                    <h2 className="gradient-text">About Me</h2>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="card">
                        <h3 className="mb-20">Career Objective</h3>
                        <p className="text-lg leading-relaxed">
                            Motivated Software Testing and IT Analyst professional skilled in
                            Functional Testing, API Testing, Performance Testing and ERP System Support.
                        </p>

                        <div className="grid grid-2 gap-6 mt-30">
                            <div className="p-6 bg-pink-50 rounded-lg">
                                <h4 className="font-semibold text-pink-600 mb-10">Location</h4>
                                <p className="text-gray-700">Tirunelveli, Tamil Nadu</p>
                            </div>
                            <div className="p-6 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-blue-600 mb-10">Languages</h4>
                                <p className="text-gray-700">English (Fluent), Tamil (Native)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
