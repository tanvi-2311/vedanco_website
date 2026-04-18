import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const SkillTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const observerOptions = { threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stagger-item, .accent-bar-reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="business-detail-page">
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/skill-development.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Industrial <br/>Upskilling</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Academy: Engineering the next generation of global industrial professionals.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We bridge the global capability gap through immersive, industry-focused certification and development programs.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">250k+</span><span className="label">Trained Professionals</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">85%</span><span className="label">Placement Rate</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">AI</span><span className="label">Curriculum Driven</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">ISO</span><span className="label">Certified Academy</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/skill-development.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Empowering Knowledge</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our learning centers utilize advanced simulation and industrial hands-on experience for high-performance roles.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/skill-development.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Future-Ready Workforce</h3>
                    <p>By integrating training with real-world infrastructure assets, we ensure that every graduate is ready for complex technical roles from day one.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Browse Programs <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Training Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/skill-development.png')" }}></div>
                            <div className="adani-card-body"><h4>Industrial Ops</h4><p>Specialized training for port management and heavy machinery operation.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/join2.png')" }}></div>
                            <div className="adani-card-body"><h4>Digital Skills</h4><p>Advanced certifications in AI, Cloud architecture, and industrial digital transformation.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>Leadership Academy</h4><p>Training the next generation of industrial floor managers and corporate executives.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Unlock your global potential today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Request Program Catalog</Link>
                </div>
            </section>
        </main>
    );
};

export default SkillTraining;
