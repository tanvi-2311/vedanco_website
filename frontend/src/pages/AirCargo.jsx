import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const AirCargo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
        const observerOptions = { threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Track all reveal and stagger elements
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stagger-item, .accent-bar-reveal').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="business-detail-page">
            {/* Adani Style Hero */}
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/air_cargo_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Air Cargo <br/>Operations</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>
                        Vedanco Global Logistics: Redefining velocity in the global supply chain through high-performance air freight.
                    </p>
                    <div className="breadcrumb reveal-up" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
                        <Link to="/" style={{color: '#fff'}}>Home</Link> / <Link to="/businesses" style={{color: '#fff'}}>Businesses</Link> / Air Cargo
                    </div>
                </div>
            </section>

            {/* Sector Overview Section */}
            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">With an integrated network of hubs and a commitment to precision, Vedanco Air Cargo manages the most time-critical assets of the global economy.</p>
                    </div>
                    
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item">
                            <span className="val">250+</span>
                            <span className="label">Global Air Hubs</span>
                        </div>
                        <div className="adani-stat-item stagger-item">
                            <span className="val">24h</span>
                            <span className="label">Mission Response</span>
                        </div>
                        <div className="adani-stat-item stagger-item">
                            <span className="val">99%</span>
                            <span className="label">Safety Accuracy</span>
                        </div>
                        <div className="adani-stat-item stagger-item">
                            <span className="val">1.5M</span>
                            <span className="label">Tons Annual Cargo</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Adani Sticky Reveal Section */}
            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/aviation_cargo_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Engineering Velocity</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize strategic partnerships and our own dedicated fleet to ensure that 'impossible' deadlines are met.</p>
                        <Link to="/contact" className="btn-adani reveal-up" style={{background: 'var(--adani-teal)'}}>Partner with us</Link>
                    </div>
                </div>
            </section>

            {/* Split Operational Section - Slides over the sticky section */}
            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/air_cargo_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Strategic Global Velocity</h3>
                    <p>
                        Our air freight solutions are engineered for high-performance industries. We bridge the gap between production and demand by utilizing a dedicated fleet and real-time synchronization with global customs and port authorities.
                    </p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>
                        Explore Air Network <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            {/* Business Vertical Highlights with Staggered Cards */}
            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Key Service Verticals</h2>
                    </div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/air_cargo_hero.png')" }}></div>
                            <div className="adani-card-body">
                                <h4>Express Freight</h4>
                                <p>Priority Next-Flight-Out services for pharmaceuticals, high-tech components, and critical industrial parts.</p>
                                <Link to="/contact" className="read-more-link">Explore Service <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}></div>
                            <div className="adani-card-body">
                                <h4>Charter Operations</h4>
                                <p>On-demand whole-aircraft solutions for oversized project cargo and remote destination requirements.</p>
                                <Link to="/contact" className="read-more-link">Explore Service <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/customs_clearance_hero.png')" }}></div>
                            <div className="adani-card-body">
                                <h4>Pharma-Cold Chain</h4>
                                <p>Validated temperature-controlled logistics for sensitive biological and pharmaceutical payloads.</p>
                                <Link to="/contact" className="read-more-link">Explore Service <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adani Style CTA Bar */}
            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Ready to move with precision?</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Contact Our Air Desk</Link>
                </div>
            </section>
        </main>
    );
};

export default AirCargo;
