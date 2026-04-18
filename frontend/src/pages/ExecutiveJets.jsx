import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ExecutiveJets = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/executive_jets_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Executive <br/>Aviation</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Private: The ultimate standard in privacy, luxury, and point-to-point mobility.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We provide ultra-luxury corporate aviation solutions, tailored for the world's most demanding decision-makers and high-performance teams.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">25+</span><span className="label">Elite Aircraft</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Fixed Schedule</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">100%</span><span className="label">Privacy Guarantee</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Global</span><span className="label">Landing Rights</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/executive_jets_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Freedom in Flight</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our private fleet is managed to the highest industrial standards, serving as a productive extension of your boardroom.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/executive_jets_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Bespoke Aviation</h3>
                    <p>With custom interior configurations and a dedicated global concierge team, we transform air travel into a seamless, high-performance experience.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Inquire Fleet <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Core Offerings</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/executive_jets_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Corporate Charter</h4><p>Optimized travel for executive teams with on-board meeting and connectivity facilities.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/airlines_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Fractional Ownership</h4><p>Ownership and jet card solutions for consistent, high-frequency global aviation needs.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>FBO Services</h4><p>Bespoke ground handling and private terminal lounge access at major gateways.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Elevate your global mobility today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to an Advisor</Link>
                </div>
            </section>
        </main>
    );
};

export default ExecutiveJets;
