import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Warehousing = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/warehousing_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Smart <br/>Warehousing</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Logistics: Optimizing inventory through AI-driven automation and strategic infrastructure.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">Our warehousing solutions represent the intersection of space and intelligence, providing a high-performance node in your supply chain.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">5M+</span><span className="label">Sq. Ft. Capacity</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">99%</span><span className="label">Inventory Accuracy</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">24h</span><span className="label">Order Cycle Time</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">IoT</span><span className="label">Enabled Tracking</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/warehousing_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Intelligence in Storage</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize ASRS and automated fulfillment systems to ensure zero-error supply chain velocity.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/warehousing_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Synchronized Fulfillment</h3>
                    <p>We operate multi-tier, tech-enabled facilities designed for maximum throughput and seamless inventory visibility across global retail and industrial networks.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Explore Facilities <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Infrastructure Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/warehousing_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Distribution Centers</h4><p>Strategically located hubs designed for rapid cross-docking and distribution.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}></div>
                            <div className="adani-card-body"><h4>Cold Chain Storage</h4><p>Certified temperature-controlled environments for sensitive biological assets.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>Secured Vaults</h4><p>High-security storage for high-value electronics and luxury goods.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Optimize your storage today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Contact Expert Team</Link>
                </div>
            </section>
        </main>
    );
};

export default Warehousing;
