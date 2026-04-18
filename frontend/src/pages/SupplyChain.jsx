import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const SupplyChain = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/supply_chain_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Network <br/>Integrity</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Solutions: Synchronizing global supply networks with data-driven precision.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We provide the architectural framework for global trade, managing the flow of goods from the factory floor to the final destination.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">25%</span><span className="label">Opex Reduction</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">AI</span><span className="label">Driven Forecast</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Node Fragmentation</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Global</span><span className="label">Control Tower</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/supply_chain_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Synchronized Commerce</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our architects engineer resilient networks that adapt to global market shifts in real-time.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/supply_chain_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Visibility & Reslience</h3>
                    <p>By integrating predictive analytics and robust visibility tools, we ensure that your global supply chain maintains a competitive edge in any macro-environment.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult an Architect <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Strategic Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/supply_chain_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Network Design</h4><p>End-to-end audit and redesign of supply chains to minimize lead times.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/warehousing_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>4PL Orchestration</h4><p>Single point of accountability for managing all third-party global providers.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}></div>
                            <div className="adani-card-body"><h4>Vendor Sync</h4><p>Synchronizing global production partners for just-in-time material delivery.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Unify your supply network today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to a Consultant</Link>
                </div>
            </section>
        </main>
    );
};

export default SupplyChain;
