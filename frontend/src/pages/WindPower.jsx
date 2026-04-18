import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const WindPower = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/pill_energy.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Wind <br/>Power</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Wind: Harnessing atmospheric kinetic energy for a zero-carbon future.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We operate world-class onshore and offshore wind farms, utilizing cutting-edge turbine technology for reliable renewable energy.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">3GW+</span><span className="label">Installed Assets</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">95%</span><span className="label">Asset Availability</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Lidar</span><span className="label">Scan Precision</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Ops Emissions</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/pill_energy.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>The Constant Force</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize Lidar scanning to optimize turbine performance across the most challenging global terrains.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/pill_energy.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Atmospheric Energy</h3>
                    <p>Our wind assets utilize AI-predictive maintenance to ensure consistent energy delivery, powering the global shift towards a truly sustainable industrial grid.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Explore Operations <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Strategic Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_energy.png')" }}></div>
                            <div className="adani-card-body"><h4>Onshore Wind</h4><p>Large-scale developments in high-wind zones with integrated storage.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/sea_cargo_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Offshore Tech</h4><p>Pioneering the next frontier of deep-water high-capacity wind turbine assets.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}></div>
                            <div className="adani-card-body"><h4>O&M Services</h4><p>Specialized drone-based inspection and AI-driven asset longevity services.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Harness the wind with a global leader.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Inquire Partnership</Link>
                </div>
            </section>
        </main>
    );
};

export default WindPower;
