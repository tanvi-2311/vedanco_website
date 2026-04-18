import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const AirlinesDetail = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/airlines_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Commercial <br/>Aviation</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Aviation: Pioneering global connectivity through high-performance flight excellence.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We redefine passenger flight as a fusion of engineering precision and world-class hospitality, serving the world's most critical travel corridors.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">100+</span><span className="label">Fleet Size</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">50M+</span><span className="label">Annual Passengers</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">5-Star</span><span className="label">Service Rating</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Safety Compromise</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/airlines_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>The Art of Performance</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize the latest fuel-efficient aircraft and AI-driven maintenance to ensure maximum global uptime.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/airlines_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Global Flight precision</h3>
                    <p>Our airlines operate at the pinnacle of efficiency, providing seamless connections across continents for millions of global travelers annually.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Explore Routes <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Core Operations</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/airlines_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Commercial Flight</h4><p>Managing international routes with a focus on passenger comfort and on-time performance.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/executive_jets_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Luxury Charter</h4><p>On-demand flight solutions for corporate groups and high-profile global events.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>MRO Services</h4><p>Technical maintenance and overhaul for world-class narrow and wide-body aircraft.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Fly with the future of aviation.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Book Corporate Travel</Link>
                </div>
            </section>
        </main>
    );
};

export default AirlinesDetail;
