import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const LastMileDelivery = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/last_mile_delivery_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Final Mile <br/>Delivery</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Delivery: Solving the high-performance challenge of final-destination logistics.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We provide the critical final link in the supply chain, ensuring that industrial and consumer goods reach end users with speed.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">1M+</span><span className="label">Monthly Deliveries</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">99.5%</span><span className="label">First-Attempt Success</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Hyper</span><span className="label">Local Network</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Live</span><span className="label">Order Tracking</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/last_mile_delivery_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Precision in Proximity</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize micro-fulfillment centers to bridge the gap between global logistics and domestic fulfillment.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/last_mile_delivery_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>The Final Connection</h3>
                    <p>Our last-mile solutions utilize hyper-local distribution and AI-optimized fleets to ensure that the "Final Mile" is as efficient as the long-haul transit.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>View Network Coverage <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Service Highlights</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/last_mile_delivery_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>E-Com Fulfillment</h4><p>Integrated delivery solutions for leading global platforms with same-day capability.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/warehousing_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Industrial Parcel</h4><p>Specialized handling for critical spare parts and urgent industrial components.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/transport_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Metropolitan Ops</h4><p>Managing micro-centers in major hubs to enable 90-minute delivery cycles.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Master the last mile with Vedanco.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Plan Your Strategy</Link>
                </div>
            </section>
        </main>
    );
};

export default LastMileDelivery;
