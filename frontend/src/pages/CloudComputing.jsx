import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const CloudComputing = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Cloud <br/>Computing</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Cloud: Providing high-availability infrastructure for global industrial titans.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We manage hyperscale cloud environments that provide the computational foundation for today's data-driven industrial behemoths.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">99.99</span><span className="label">Uptime Sync</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Security Breaches</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Global</span><span className="label">Node Presence</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">24/7</span><span className="label">SOC Monitoring</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Powering the Edge</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our cloud solutions integrate Hybrid and Multi-Cloud architectures to ensure maximum operational resilience.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>High-Performance Cloud</h3>
                    <p>By utilizing edge computing nodes, we reduce latency for critical industrial AI and IoT applications across the global digital landscape.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult an Engineer <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Cloud Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>Hybrid Clusters</h4><p>Seamlessly bridging on-premise systems with hyperscale public cloud nodes.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/join2.png')" }}></div>
                            <div className="adani-card-body"><h4>Managed Security</h4><p>Comprehensive SOC-as-a-service for real-time threat detection and mitigation.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Data Lakehouses</h4><p>High-performance architectures for processing massive industrial telemetry data.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Scale your industrial compute today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Request a Cloud Audit</Link>
                </div>
            </section>
        </main>
    );
};

export default CloudComputing;
