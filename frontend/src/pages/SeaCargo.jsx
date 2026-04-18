import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const SeaCargo = () => {
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

        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stagger-item, .accent-bar-reveal').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="business-detail-page">
            {/* Adani Style Hero */}
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/sea_cargo_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Sea Cargo <br/>Maritime</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>
                        Vedanco Maritime: Connecting global markets through high-performance maritime logistics and port precision.
                    </p>
                    <div className="breadcrumb reveal-up" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
                        <Link to="/" style={{color: '#fff'}}>Home</Link> / <Link to="/businesses" style={{color: '#fff'}}>Businesses</Link> / Sea Cargo
                    </div>
                </div>
            </section>

            {/* Sector Overview Section */}
            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">Our maritime operations form the backbone of international trade, providing reliable and secure routes for containerized and bulk shipments worldwide.</p>
                    </div>
                    
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item">
                            <span className="val">50+</span>
                            <span className="label">Major Ports Served</span>
                        </div>
                        <div className="adani-stat-item stagger-item">
                            <span className="val">1.2M</span>
                            <span className="label">Annual TEU Throughput</span>
                        </div>
                        <div className="adani-stat-item stagger-item">
                            <span className="val">Zero</span>
                            <span className="label">Safety Incidents</span>
                        </div>
                        <div className="adani-stat-item stagger-item">
                            <span className="val">15k</span>
                            <span className="label">Fleet Network Units</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Adani Sticky Reveal Section */}
            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/sea_cargo_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Maritime Horizons</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We operate at the leading edge of oceanic transport, integrating technology with logistics for a seamless global flow.</p>
                        <Link to="/contact" className="btn-adani reveal-up" style={{background: 'var(--adani-teal)'}}>Explore Port Operations</Link>
                    </div>
                </div>
            </section>

            {/* Split Operational Section */}
            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/sea_cargo_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Global Maritime Reach</h3>
                    <p>
                        We operate at the intersection of scale and efficiency. By managing end-to-end port operations and vessel schedules, we ensure that bulk commodities and finished goods move across oceans with absolute predictability.
                    </p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>
                        Explore Partnerships <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            {/* Business Vertical Highlights with Staggered Cards */}
            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Core Operations</h2>
                    </div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/sea_cargo_hero.png')" }}></div>
                            <div className="adani-card-body">
                                <h4>FCL Solutions</h4>
                                <p>Full Container Load services with priority vessel space and direct port-to-door logistics for high-volume trade.</p>
                                <Link to="/contact" className="read-more-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/global_trading_hero.png')" }}></div>
                            <div className="adani-card-body">
                                <h4>Bulk Cargo</h4>
                                <p>Specialized handling for non-containerized heavy industrial goods, minerals, and liquid commodities.</p>
                                <Link to="/contact" className="read-more-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}></div>
                            <div className="adani-card-body">
                                <h4>Port Logistics</h4>
                                <p>On-site stevedoring, warehousing, and customs synchronization at major international gateway ports.</p>
                                <Link to="/contact" className="read-more-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adani Style CTA Bar */}
            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Set sail with a global maritime leader.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Get a Shipping Quote</Link>
                </div>
            </section>
        </main>
    );
};

export default SeaCargo;
