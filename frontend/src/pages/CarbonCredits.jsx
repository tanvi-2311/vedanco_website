import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const CarbonCredits = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Carbon <br/>Assets</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Sustainability: Facilitating the global transition to Net-Zero through integrity.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We bridge the gap between financial capital and environmental potential by managing verified emission reduction projects globally.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">50M+</span><span className="label">Tons CO2 Offset</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Gold</span><span className="label">Verification Std.</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Global</span><span className="label">Trade Presence</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Secure</span><span className="label">Blockchain Tracking</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Environmental Integrity</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We manage high-quality VCM assets that provide permanent and additional climate impact for global leaders.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Investing in Our Planet</h3>
                    <p>By developing high-integrity afforestation and renewable energy projects, we help organizations reach their ESG targets with absolute confidence.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Browse Projects <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Strategic Offerings</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}></div>
                            <div className="adani-card-body"><h4>Project Origination</h4><p>Developing verified high-integrity carbon credit projects globally.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}></div>
                            <div className="adani-card-body"><h4>ESG Advisory</h4><p>Helping global enterprises map their strategic path to Net-Zero emissions.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_energy.png')" }}></div>
                            <div className="adani-card-body"><h4>Carbon Trading</h4><p>Providing liquidity to environmental markets through institutional credit networks.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Accelerate your ESG journey today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to an ESG Expert</Link>
                </div>
            </section>
        </main>
    );
};

export default CarbonCredits;
