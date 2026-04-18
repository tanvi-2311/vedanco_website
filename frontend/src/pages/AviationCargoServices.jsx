import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const AviationCargoServices = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/aviation_cargo_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Sky-Cargo <br/>Operations</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Aviation Cargo: Connecting time-critical supply chains through specialized aviation hubs.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We manage high-capacity air cargo terminals, providing the technical infrastructure for global express and heavy-lift missions.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">2M</span><span className="label">Metric Tons p.a.</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">24/7</span><span className="label">Hub Availability</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Auto</span><span className="label">Sorting Systems</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Tier 1</span><span className="label">Global Hubs</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/aviation_cargo_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>High-Frequency Flow</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our terminals are engineered for maximum speed and security, reducing turnaround times for global carriers.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/aviation_cargo_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Strategic Global Velocity</h3>
                    <p>By integrating automated palletization and real-time customs synchronization, we ensure that critical assets move across oceans with absolute predictability.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>View Terminal Network <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Core Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/air_cargo_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Technical Handling</h4><p>Specialized processing for sensitive electronics and oversized industrial machinery.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/sea_cargo_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Pharma-Air Logistics</h4><p>Certified cold-chain terminals for the global movement of life-saving medicines.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Blockchain Cargo</h4><p>End-to-end tracking and documentation for high-value international assets.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Accelerate your sky-cargo strategy today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to a Technical Operator</Link>
                </div>
            </section>
        </main>
    );
};

export default AviationCargoServices;
