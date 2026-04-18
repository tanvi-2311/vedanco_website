import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const SmartTerminals = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Smart <br/>Terminals</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Infrastructure: Building the next-generation digital backbone for global airport operations.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We redefine passenger flow and logistics through AI-powered automation, biometrics, and real-time operational synchronization.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">AI</span><span className="label">Driven Core</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">40%</span><span className="label">Flow Efficiency</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Physical Contact</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">24/7</span><span className="label">Operational Monitor</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Digital Foundations</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our terminals utilize blockchain-authenticated identity and autonomous handling systems for a seamless experience.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Infrastructure for Tomorrow</h3>
                    <p>By integrating technical innovation into physical assets, we create intuitive environments that manage millions of movements with absolute precision.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult an Architect <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Key Systems</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Biometric Identity</h4><p>Frictionless processing from check-in to boarding using secured facial recognition.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/airlines_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Autonomous Ground</h4><p>Automated push-back and ground handling systems powered by robotics.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>Data Control Hubs</h4><p>Unified command systems for managing multiple assets from a single cockpit.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Digitize your infrastructure potential.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to an Operator</Link>
                </div>
            </section>
        </main>
    );
};

export default SmartTerminals;
