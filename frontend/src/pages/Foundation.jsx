import React, { useEffect } from 'react';
import './Foundation.css';

const Foundation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="foundation-page">
            {/* 1) Hero Section - Enhanced Impact */}
            <section className="foundation-hero">
                <div className="container">
                    <div className="hero-flex">
                        <div className="hero-text">
                            <span className="highlight-text">Empowering Communities</span>
                            <h1>Vedanco<br/>Foundation</h1>
                            <p>We bridge the gap between industrial progress and social well-being through sustainable initiatives and skill transformation.</p>
                            <div className="hero-btns">
                                <a href="#focus-areas" className="btn-primary-green">Explore Our Initiatives</a>
                            </div>
                        </div>
                        <div className="hero-image-styled">
                            <img src="/assets/images/foundation-hero.png" alt="Vedanco Foundation Hero" />
                            <div className="impact-badge">
                                <h3>15.2k+</h3>
                                <span>Lives Impacted Yearly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2) Focus Areas - Attractive Card Design */}
            <section className="focus-areas" id="focus-areas">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Five Pillars</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="focus-grid">
                        {[
                            { title: 'Environment', icon: 'fa-leaf', desc: 'Plastic waste awareness and recycling drives to create a circular economy.' },
                            { title: 'Skill Training', icon: 'fa-graduation-cap', desc: 'Empowering the workforce with industrial training and job readiness.' },
                            { title: 'Digital Literacy', icon: 'fa-microchip', desc: 'Promoting technology and automation awareness for small scale businesses.' },
                            { title: 'Clean Energy', icon: 'fa-solar-panel', desc: 'Solar awareness and sustainable energy initiatives for a greener future.' },
                            { title: 'Community Support', icon: 'fa-hands-holding-heart', desc: 'Hygiene, safety and infrastructure development for local communities.' }
                        ].map((item, id) => (
                            <div key={id} className="focus-card">
                                <div className="focus-icon"><i className={`fas ${item.icon}`}></i></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3) How We Work - High Contrast Section */}
            <section className="how-we-work">
                <div className="container">
                    <div className="work-box">
                        <div className="work-image">
                            <img src="/assets/images/skill-development.png" alt="Skill Development" />
                        </div>
                        <div className="work-content">
                            <h2>The Impact Journey</h2>
                            <div className="work-steps">
                                <div className="work-step">
                                    <span className="step-num">01.</span>
                                    <div className="work-step-content">
                                        <h4>Root-Level Awareness</h4>
                                        <p>Conducting workshops and campus drives to identify and inspire potential change-makers.</p>
                                    </div>
                                </div>
                                <div className="work-step">
                                    <span className="step-num">02.</span>
                                    <div className="work-step-content">
                                        <h4>Practical Training</h4>
                                        <p>Industry-standard sessions designed to make individuals job-ready in weeks with hands-on skill transformation.</p>
                                    </div>
                                </div>
                                <div className="work-step">
                                    <span className="step-num">03.</span>
                                    <div className="work-step-content">
                                        <h4>Ecosystem Integration</h4>
                                        <p>Connecting trained individuals directly with professional opportunities across Vedanco & partner networks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) Impact Vision - Black Section with Glow */}
            <section className="impact-vision">
                <div className="container">
                    <div className="section-header light">
                        <h2>Our Vision For 2030</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="vision-stats">
                        <div className="stat">
                            <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
                            <h5>Employment</h5>
                            <p>Directly creating thousands of specialized industrial roles for the community.</p>
                        </div>
                        <div className="stat">
                            <div className="stat-icon"><i className="fas fa-recycle"></i></div>
                            <h5>Zero Waste</h5>
                            <p>Achieving significant reduction in plastic waste through our smart hubs.</p>
                        </div>
                        <div className="stat">
                            <div className="stat-icon"><i className="fas fa-laptop-code"></i></div>
                            <h5>Tech-First</h5>
                            <p>Enabling digital transformation for 500+ small vendors & MSMEs.</p>
                        </div>
                        <div className="stat">
                            <div className="stat-icon"><i className="fas fa-charging-station"></i></div>
                            <h5>Green Power</h5>
                            <p>Transitioning our operations to 100% renewable and clean energy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5) Get Involved - Premium Banner */}
            <section className="involve-section">
                <div className="container">
                    <div className="involve-card">
                        <div className="involve-text">
                            <h2>Building the future,<br/>Together.</h2>
                            <p>Join our mission as a volunteer or a strategic partner in creating lasting social impact.</p>
                            <div className="involve-cta">
                                <button className="btn-solid-white">Partner With Us</button>
                                <button className="btn-outline-white">Join as Volunteer</button>
                            </div>
                        </div>
                        <div className="involve-visual">
                            <i className="fas fa-hand-holding-heart"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Foundation;
