import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const SolarEnergyDetail = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Solar <br/>Energy</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Green: Harvesting the power of the sun for a decentralized energy grid.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We develop utility-scale solar farms and distributed energy solutions that provide low-cost electricity for industrial progress.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">5GW+</span><span className="label">Installed Capacity</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">20%</span><span className="label">Higher Efficiency</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Emission Profile</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">24/7</span><span className="label">Live Grid Monitoring</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Powering the Future</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>By integrating BESS and AI grid balancing, we ensure clean energy is available where it is needed most.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Utility Scale Green</h3>
                    <p>Our solar assets are engineered for maximum reliability, feeding thousands of Megawatts into national grids to power the next phase of global growth.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Explore Tech <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Technology Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}></div>
                            <div className="adani-card-body"><h4>Solar Parks</h4><p>Massive utility-scale installations for regional power grid support.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}></div>
                            <div className="adani-card-body"><h4>Commercial Solar</h4><p>Tailored rooftop and site solutions for industrial complexes globally.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}></div>
                            <div className="adani-card-body"><h4>BESS Integration</h4><p>Advanced battery storage to manage production peaks and grid stability.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Transition to clean energy today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Request a Technical Audit</Link>
                </div>
            </section>
        </main>
    );
};

export default SolarEnergyDetail;
