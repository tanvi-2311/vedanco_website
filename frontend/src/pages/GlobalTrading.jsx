import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const GlobalTrading = () => {
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
            <section className="adani-hero" style={{ backgroundImage: "url('/assets/images/global_trading_hero.png')" }}>
                <div className="adani-hero-overlay"></div>
                <div className="container adani-hero-content">
                    <h1 className="reveal-left">Global <br/>Trade Desk</h1>
                    <p className="reveal-up" style={{color: '#fff', fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9}}>Vedanco Trading: Bridging the gap between producers and essential markets.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal">
                        <h2 className="reveal-up">Sector Overview</h2>
                        <p className="reveal-up">We facilitate the movement of essential commodities across borders, leveraging market insights and strategic financial instruments.</p>
                    </div>
                    <div className="adani-stats-grid">
                        <div className="adani-stat-item stagger-item"><span className="val">30+</span><span className="label">Commodities Traded</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">$2B+</span><span className="label">Annual Turnover</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">A+</span><span className="label">Credit Rating</span></div>
                        <div className="adani-stat-item stagger-item"><span className="val">15+</span><span className="label">Global Locations</span></div>
                    </div>
                </div>
            </section>

            <section className="sticky-reveal-section">
                <div className="sticky-bg-img" style={{ backgroundImage: "url('/assets/images/global_trading_hero.png')" }}></div>
                <div className="sticky-content-box">
                    <div className="container text-center">
                        <h2 className="reveal-up" style={{fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '20px'}}>Empowering Commerce</h2>
                        <p className="reveal-up" style={{fontSize: '1.4rem', color: '#fff', maxWidth: '800px', margin: '0 auto 40px'}}>We integrate procurement, risk management, and trade finance to ensure industrial materials reach where they are needed.</p>
                    </div>
                </div>
            </section>

            <section className="adani-ops-split" style={{marginTop: 0}}>
                <div className="adani-ops-img reveal-left" style={{ backgroundImage: "url('/assets/images/global_trading_hero.png')" }}></div>
                <div className="adani-ops-content reveal-right">
                    <h3>Strategic Commerce</h3>
                    <p>Our trading desk operates at the heart of the global economy, providing the liquidity and expertise required for high-scale commodity movements.</p>
                    <Link to="/contact" className="read-more-link" style={{color: '#fff'}}>Consult Our Desk <i className="fas fa-arrow-right"></i></Link>
                </div>
            </section>

            <section style={{background: '#fcfcfc'}}>
                <div className="container">
                    <div className="adani-section-head accent-bar-reveal"><h2 className="reveal-up">Strategic Verticals</h2></div>
                    <div className="adani-project-grid">
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/global_trading_hero.png')" }}></div>
                            <div className="adani-card-body"><h4>Commodity Sourcing</h4><p>Vertical integration with global producers for consistent quality and supply.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}></div>
                            <div className="adani-card-body"><h4>Trade Finance</h4><p>Accelerating growth through strategic financial instruments and credit facilities.</p></div>
                        </div>
                        <div className="adani-card stagger-item">
                            <div className="adani-card-img" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}></div>
                            <div className="adani-card-body"><h4>Risk Analytics</h4><p>Deep analysis of commodity price movements and global geopolitical trends.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="adani-cta-bar">
                <div className="container">
                    <h2 className="reveal-up" style={{fontSize: '2.5rem', fontWeight: 800, color: 'var(--adani-blue)', marginBottom: '30px'}}>Optimize your procurement today.</h2>
                    <Link to="/contact" className="btn-adani reveal-up">Talk to a Trader</Link>
                </div>
            </section>
        </main>
    );
};

export default GlobalTrading;
