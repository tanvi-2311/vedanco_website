import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const WasteRecyclingDetail = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/pill_recycling.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Circular <br/>Economy</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Recycling: Transforming industrial waste into high-purity global commodities.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We redefine resource management by closing the loop on industrial production, recovering valuable materials from complex streams.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">20+</span><span className="label">Processing Sites</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">90%</span><span className="label">Recovery Rate</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">AI</span><span className="label">Sorting Systems</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">Zero</span><span className="label">Landfill Target</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/pill_recycling.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Waste to Value</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We utilize computer vision and chemical recycling to ensure the global circular economy is a profitable reality.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/pill_recycling.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Circular Ops</h3>
                    <p>By recovering high-purity polymers, metals, and rare-earth elements, we provide the raw materials for a sustainable industrial future.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>View Technology <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Recycling Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_recycling.png')" }}></div>
                            <div className="adani-card-body"><h4>Industrial Recovery</h4><p>Processing metal and plastic waste back into manufacturing feedstock.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>E-Waste Systems</h4><p>Recovering rare-earth elements from decommissioned global IT assets.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}></div>
                            <div className="adani-card-body"><h4>Strategic Advisory</h4><p>Helping global corporations implement zero-waste and circular strategies.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Implement a zero-waste strategy today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to an Engineer</Link>
                </div>
            </section>
        </main>
    );
};

export default WasteRecyclingDetail;
