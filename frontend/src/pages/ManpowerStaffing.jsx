import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ManpowerStaffing = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/join1.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Human <br/>Capital</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Manpower: Building the high-performance workforce for global industry.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We provide strategic talent acquisition and workforce management solutions for technical and high-scale industrial operations worldwide.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">250k+</span><span className="label">Managed Workforce</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Resource Latency</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Top</span><span className="label">Tier Sourcing</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Global</span><span className="label">Compliance Desk</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/join1.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Strategic Resourcing</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We ensure that precisely curated skill sets are deployed to high-value project sites at the right time.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/join1.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Workforce Sync</h3>
                    <p>By managing end-to-end recruitment and payroll compliance across jurisdictions, we allow our partners to focus on core industrial growth.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult a Talent Expert <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Service Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/join1.png')" }}></div>
                            <div className="adani-card-body"><h4>Technical Staffing</h4><p>Sourcing specialized engineers and project managers for heavy-lift industries.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/skill-development.png')" }}></div>
                            <div className="adani-card-body"><h4>Industrial Labor</h4><p>Managing high-volume skilled manpower for port and mega-infrastructure sites.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>HRO Services</h4><p>Unified Human Resource Outsourcing including payroll and global compliance.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Scale your workforce with a world leader.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to a Talent Advisor</Link>
                </div>
            </section>
        </main>
    );
};

export default ManpowerStaffing;
