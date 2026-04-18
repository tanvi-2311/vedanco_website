import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const CustomsClearance = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/customs_clearance_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Customs <br/>Compliance</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Compliance: Simplifying global trade through expert brokerage.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We transform regulatory hurdles into seamless transitions, ensuring your goods cross borders with speed and integrity.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Compliance Errors</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">20+</span><span className="label">Licensed Brokers</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">30%</span><span className="label">Faster Clearance</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">AEO</span><span className="label">Certified Process</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/customs_clearance_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Precision in Compliance</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our brokerage experts manage every detail of documentation, Eliminating friction in your global supply chain.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/customs_clearance_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Regulatory Integrity</h3>
                    <p>By utilizing advanced digital filing and strategic port synchronization, we ensure your business remains above board in all international jurisdictions.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult Our Experts <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Service Highlights</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/customs_clearance_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Brokerage Services</h4><p>Preparation and submission of duty entries and shipping bills across global ports.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/global_trading_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Duty Optimization</h4><p>Advisory on FTAs and tariff concessions to minimize your financial footprint.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>Audit & Risk</h4><p>Comprehensive risk assessments to ensure compliance across all jurisdictions.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Simplify your cross-border operations today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to a Compliance Officer</Link>
                </div>
            </section>
        </main>
    );
};

export default CustomsClearance;
