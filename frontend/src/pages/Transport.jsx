import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Transport = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/transport_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Fleet <br/>Operations</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Fleet: Navigating global terrain with an intelligent and resilient transport network.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">Our transportation network is the nervous system of modern trade, connecting remote origins to urban centers with absolute reliability.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">10k+</span><span className="label">Fleet Size</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">98%</span><span className="label">On-Time Delivery</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">GPS</span><span className="label">Live Telematics</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Transit Loss</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/transport_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Moving at Demand Speed</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize AI route optimization to ensure your core assets move through the most efficient global corridors.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/transport_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Strategic Mobility</h3>
                    <p>Our fleet spans multiple modalities, providing the primary link for industrial raw materials and finished consumer goods across interstate borders.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>View Fleet Stats <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Fleet Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/transport_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>FTL Operations</h4><p>Dedicated transport for large-volume movements with direct point-to-point transit.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}></div>
                            <div className="adani-card-body"><h4>Multi-Modal Rails</h4><p>Integrating road and rail paths for the fastest industrial delivery cycles.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/last_mile_delivery_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Secure Transit</h4><p>Expert transport for sensitive materials with active digital monitoring.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Plan your route with Vedanco.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Request a Logistics Quote</Link>
                </div>
            </section>
        </main>
    );
};

export default Transport;
