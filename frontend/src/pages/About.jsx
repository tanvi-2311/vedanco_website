import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            {/* 1) Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="section-tag">About Vedanco Group</span>
                        <h1>Building a Global Supply Chain, Technology & Infrastructure Ecosystem</h1>
                        <p>Vedanco is a multi-domain integrated platform connecting logistics, trade, manpower, recycling, software, aviation, energy, and infrastructure.</p>
                        <div className="scroll-indicator">
                            <div className="mouse"></div>
                            <span>Scroll to explore</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2) Vision & Mission */}
            <section className="vision-mission" id="vision">
                <div className="container">
                    <div className="vision-grid">
                        <div className="vision-card animate-on-scroll">
                            <div className="vision-icon"><i className="fas fa-eye"></i></div>
                            <h2>Our Vision</h2>
                            <p>To create an integrated, scalable, technology-driven ecosystem with physical + digital control, revolutionizing global trade and infrastructure.</p>
                        </div>
                        <div className="mission-card animate-on-scroll">
                            <div className="mission-icon"><i className="fas fa-rocket"></i></div>
                            <h2>Our Mission</h2>
                            <p>Executing large-scale projects with efficiency and precision, bridging the gap between industries through innovation and sustainable practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3) Problems We Solve */}
            <section className="problems-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Challenges We Address</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="problems-grid">
                        <div className="problem-item">
                            <i className="fas fa-network-wired"></i>
                            <h3>Fragmented Global Supply Chains</h3>
                            <p>Streamlining complex, disconnected logistics networks into a single, cohesive flow.</p>
                        </div>
                        <div className="problem-item">
                            <i className="fas fa-dollar-sign"></i>
                            <h3>High Logistics Cost</h3>
                            <p>Optimizing routes and operations to drastically reduce the cost of moving goods globally.</p>
                        </div>
                        <div className="problem-item">
                            <i className="fas fa-users-slash"></i>
                            <h3>Lack of Reliable Manpower</h3>
                            <p>Bridging the skill gap with trained, professional manpower for specialized industries.</p>
                        </div>
                        <div className="problem-item">
                            <i className="fas fa-dumpster"></i>
                            <h3>Poor Waste Management</h3>
                            <p>Implementing circular economy principles to convert waste into valuable resources.</p>
                        </div>
                        <div className="problem-item">
                            <i className="fas fa-robot"></i>
                            <h3>Lack of Automation</h3>
                            <p>Bringing digital transformation and AI-driven automation to traditional operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) Integrated Solution */}
            <section className="solution-section">
                <div className="container">
                    <div className="solution-box">
                        <div className="solution-text">
                            <h2>One Platform – Multiple Solutions – Scalable Growth</h2>
                            <p>Vedanco Group combines physical infrastructure with digital intelligence. Our integrated model ensures that every vertical supports the other, creating a self-sustaining ecosystem of growth.</p>
                            <ul className="solution-list">
                                <li><i className="fas fa-check-circle"></i> Digital-First Control Systems</li>
                                <li><i className="fas fa-check-circle"></i> Physical Asset Management</li>
                                <li><i className="fas fa-check-circle"></i> Seamless Cross-Domain Integration</li>
                                <li><i className="fas fa-check-circle"></i> Global Execution Capabilities</li>
                            </ul>
                        </div>
                        <div className="solution-visual">
                            <div className="eco-circle">
                                <span>VEDANCO</span>
                                <div className="orbit orbit-1"></div>
                                <div className="orbit orbit-2"></div>
                                <div className="orbit orbit-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5) Core Business Verticals */}
            <section className="verticals-section">
                <div className="container">
                    <div className="section-header dark">
                        <h2>Our Business Verticals</h2>
                        <p>A multi-domain powerhouse driving global progress.</p>
                    </div>
                    <div className="verticals-grid">
                        <div className="vertical-card">
                            <i className="fas fa-ship"></i>
                            <h4>Import–Export</h4>
                            <p>Global trading and cargo movements across continents.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-truck"></i>
                            <h4>Logistics</h4>
                            <p>Integrated supply chain and smart warehousing solutions.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-users"></i>
                            <h4>Manpower</h4>
                            <p>Professional staffing and industrial manpower solutions.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-couch"></i>
                            <h4>Interior Design</h4>
                            <p>Premium corporate and residential interior styling.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-recycle"></i>
                            <h4>Recycling</h4>
                            <p>Sustainable waste management and material recycling.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-code"></i>
                            <h4>Software Solutions</h4>
                            <p>Custom enterprise software and digital transformation.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-plane"></i>
                            <h4>Aviation</h4>
                            <p>Vedanco Air: Cargo and executive aviation services.</p>
                        </div>
                        <div className="vertical-card">
                            <i className="fas fa-leaf"></i>
                            <h4>Energy & Carbon Credit</h4>
                            <p>Clean energy solutions and carbon footprint management.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6) How Vedanco Works (Flow Model) */}
            <section className="flow-section">
                <div className="container">
                    <div className="section-header">
                        <h2>The Vedanco Ecosystem Flow</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="flow-diagram">
                        {[
                            { step: 'Supplier', icon: 'fa-warehouse' },
                            { step: 'Vedanco', icon: 'fa-shield-halved' },
                            { step: 'Logistics', icon: 'fa-truck-fast' },
                            { step: 'Client', icon: 'fa-user-tie' },
                            { step: 'Payment', icon: 'fa-money-bill-transfer' }
                        ].map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="flow-step">
                                    <div className="step-icon"><i className={`fas ${item.icon}`}></i></div>
                                    <span>{item.step}</span>
                                </div>
                                {index < 4 && <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7) Growth Roadmap */}
            <section className="roadmap-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Growth Roadmap</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="roadmap-timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">Year 1</div>
                            <div className="timeline-content">
                                <h3>Foundational Expansion</h3>
                                <p>Trading, Manpower, Logistics, and Software development.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">Year 2–3</div>
                            <div className="timeline-content">
                                <h3>Infrastructure Scalability</h3>
                                <p>Recycling, Warehouse management, and Infrastructure development.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">Year 4–5</div>
                            <div className="timeline-content">
                                <h3>Future Horizons</h3>
                                <p>Aviation (Vedanco Air), Energy sectors, and Carbon Credit trading.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8) Competitive Advantage */}
            <section className="advantage-section">
                <div className="container">
                    <div className="advantage-grid">
                        <div className="advantage-text">
                            <h2>Competitive Advantage</h2>
                            <p>Why Vedanco stands out in the global market.</p>
                        </div>
                        <div className="advantage-cards">
                            <div className="adv-card">
                                <i className="fas fa-layer-group"></i>
                                <h4>Integrated Ecosystem</h4>
                                <p>All services under one roof for seamless operations.</p>
                            </div>
                            <div className="adv-card">
                                <i className="fas fa-chart-line"></i>
                                <h4>Multi-revenue Model</h4>
                                <p>Diversified business streams ensuring stability.</p>
                            </div>
                            <div className="adv-card">
                                <i className="fas fa-bolt"></i>
                                <h4>Fast Execution</h4>
                                <p>Rapid deployment and project completion.</p>
                            </div>
                            <div className="adv-card">
                                <i className="fas fa-fingerprint"></i>
                                <h4>Digital + Physical Control</h4>
                                <p>Full transparency and control over every asset.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9) Target Markets */}
            <section className="markets-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Global Presence</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="markets-grid">
                        {['India', 'Middle East', 'Africa', 'USA', 'Dubai', 'Singapore'].map((market) => (
                            <div key={market} className="market-pill">
                                <i className="fas fa-location-dot"></i>
                                {market}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10) Leadership */}
            <section className="leadership-section">
                <div className="container">
                    <div className="leadership-flex">
                        <div className="leader-image">
                            <img src="/assets/images/chairman_new.png.jpeg" alt="Nachiket Patel" />
                            <div className="leader-info-overlay">
                                <h3>Nachiket Patel</h3>
                                <span>Founder & CEO</span>
                            </div>
                        </div>
                        <div className="leader-content">
                            <span className="section-tag">Leadership</span>
                            <h2>Driving Innovation with a Vision</h2>
                            <p>Nachiket Patel, the Founder and CEO of Vedanco Group, brings a fresh and futuristic approach to traditional industries. Under his leadership, Vedanco has evolved into a global powerhouse, committed to building an integrated ecosystem that bridges the digital and physical worlds.</p>
                            <p>"Our goal is not just to build businesses, but to build a sustainable future through technology and infrastructure that works for everyone."</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
