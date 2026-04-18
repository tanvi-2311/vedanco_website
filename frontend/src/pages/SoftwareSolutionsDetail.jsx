import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const SoftwareSolutionsDetail = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/join2.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Enterprise <br/>Software</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Digital: Engineering the digital backbone for global industrial behemoths.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We build mission-critical digital platforms that empower organizations to automate workflows and harness AI-driven insights.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">AI</span><span className="label">Driven Core</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">250+</span><span className="label">Apps Built</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">System Downtime</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Full</span><span className="label">Stack Sovereignty</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/join2.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Engineering Excellence</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>Our squads specialize in large-scale platform development, transforming complex potential into operational reality.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/join2.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Digital Mastery</h3>
                    <p>By integrating agile methodologies with high-performance architectures, we ensure your enterprise remains agile in a software-defined world.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult an Engineer <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Service Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/join2.png')" }}></div>
                            <div className="adani-card-body"><h4>Custom ERP Systems</h4><p>Bespoke resource planning solutions for industrial and logistics sectors.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>AI & Automation</h4><p>Integrating generative AI into corporate workflows to drive operational gains.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Digital Platforms</h4><p>Building SaaS environments for global multi-tenant industrial applications.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Unleash your digital potential today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Request a Tech Audit</Link>
                </div>
            </section>
        </main>
    );
};

export default SoftwareSolutionsDetail;
