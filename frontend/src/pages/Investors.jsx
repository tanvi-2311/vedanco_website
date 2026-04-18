import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Investors = () => {
    const revenueProjection = [
        { year: '2026', range: '₹1–3 Cr', height: '15%' },
        { year: '2027', range: '₹3–8 Cr', height: '35%' },
        { year: '2028-29', range: '₹10–25 Cr', height: '60%' },
        { year: '2030+', range: '₹50–200 Cr', height: '100%' }
    ];

    const timeline = [
        { phase: 'Year 1', biz: 'Trading + Recruitment', color: '#2e7d32' },
        { phase: 'Year 2–3', biz: 'Logistics + Software', color: '#388e3c' },
        { phase: 'Year 3–5', biz: 'Recycling + Warehouse', color: '#43a047' },
        { phase: 'Year 5+', biz: 'Aviation + Energy', color: '#4caf50' }
    ];

    return (
        <main className="investors-page">
            {/* 1. HERO SECTION */}
            <section className="page-banner investors-hero" style={{ 
                backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/images/grid_port_aerial.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container banner-inner">
                    <div className="banner-content-bottom">
                        <h1 className="reveal premium-heading">Invest in the <span>Future</span> of Integrated Business Ecosystem</h1>
                        <p className="reveal subtitle">Multi-Domain Growth with Scalable Revenue Streams</p>
                        <div className="hero-ctas reveal-stagger">
                            <a href="#investor-form" className="btn-profile mega-cta">Invest Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span> &gt; </span> <span>Investors</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content-over-banner">
                {/* 2. COMPANY OVERVIEW */}
                <section className="investor-intro reveal">
                    <div className="container">
                        <div className="intro-card">
                            <span className="tag green">Ecosystem Advantage</span>
                            <h2>Multi-Domain Business Control</h2>
                            <p>Vedanco Group is a strategic business ecosystem designed to capture value across fragmented yet high-potential industries. We integrate physical operations with digital efficiency to ensure massive scalability.</p>
                            <div className="biz-domains reveal-stagger">
                                <span><i className="fas fa-ship"></i> Import-Export</span>
                                <span><i className="fas fa-truck"></i> Logistics</span>
                                <span><i className="fas fa-users"></i> Manpower</span>
                                <span><i className="fas fa-recycle"></i> Recycling</span>
                                <span><i className="fas fa-code"></i> Software</span>
                                <span><i className="fas fa-plane"></i> Aviation</span>
                                <span><i className="fas fa-bolt"></i> Energy</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. MARKET OPPORTUNITY */}
                <section className="market-section reveal">
                    <div className="container">
                        <h2 className="section-title text-center">Massive Market Opportunity</h2>
                        <div className="market-grid">
                            <div className="market-card">
                                <h3>$20+ Trilion</h3>
                                <p>Global Trade Market</p>
                            </div>
                            <div className="market-card highlight">
                                <h3>₹10+ Lakh Cr</h3>
                                <p>India Logistics Industry</p>
                            </div>
                            <div className="market-card">
                                <h3>High Growth</h3>
                                <p>Technology & AI Automation</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. REVENUE MODEL */}
                <section className="rev-model-section reveal">
                    <div className="container">
                        <h2 className="section-title">Multi-Stream Income Model</h2>
                        <div className="rev-grid reveal-stagger">
                            <div className="rev-item">
                                <div className="rev-icon"><i className="fas fa-hand-holding-usd"></i></div>
                                <h4>Import-Export</h4>
                                <p>Trading margin per ton on high-demand commodities.</p>
                            </div>
                            <div className="rev-item">
                                <div className="rev-icon"><i className="fas fa-truck-loading"></i></div>
                                <h4>Logistics</h4>
                                <p>₹50–₹200 net margin per ton of handled goods.</p>
                            </div>
                            <div className="rev-item">
                                <div className="rev-icon"><i className="fas fa-user-tie"></i></div>
                                <h4>Manpower</h4>
                                <p>₹20K–₹1L service fee per successful placement.</p>
                            </div>
                            <div className="rev-item">
                                <div className="rev-icon"><i className="fas fa-recycle"></i></div>
                                <h4>Recycling</h4>
                                <p>₹20–₹30 per kg margin on granule production.</p>
                            </div>
                            <div className="rev-item">
                                <div className="rev-icon"><i className="fas fa-laptop-code"></i></div>
                                <h4>Software</h4>
                                <p>High-ticket project fees + recurring SaaS revenue.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. REVENUE PROJECTION (CHART) */}
                <section className="projection-section reveal">
                    <div className="container">
                        <div className="proj-flex">
                            <div className="proj-text">
                                <h2>Revenue Projections</h2>
                                <p>Our conservative roadmap shows exponential growth as we scale existing operations and launch new verticals.</p>
                                <div className="stats-list">
                                    <div className="stat"><span>Target 2030+:</span> <strong>₹200 Cr+</strong></div>
                                    <div className="stat"><span>CAGR Goal:</span> <strong>150%+</strong></div>
                                </div>
                            </div>
                            <div className="proj-chart">
                                {revenueProjection.map((bar, idx) => (
                                    <div key={idx} className="chart-bar-container">
                                        <div className="bar-val">{bar.range}</div>
                                        <div className="chart-bar" style={{ height: bar.height }}></div>
                                        <div className="bar-year">{bar.year}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. GROWTH PLAN (TIMELINE) */}
                <section className="timeline-section reveal">
                    <div className="container">
                        <h2 className="section-title text-center">Strategic Growth Roadmap</h2>
                        <div className="timeline-track">
                            {timeline.map((step, idx) => (
                                <div key={idx} className="timeline-point">
                                    <div className="point-circle" style={{ background: step.color }}></div>
                                    <div className="point-content">
                                        <h5>{step.phase}</h5>
                                        <h4>{step.biz}</h4>
                                    </div>
                                    <div className="point-line" style={{ background: step.color }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7 & 8. ADVANTAGE & MARKETS */}
                <section className="advantage-section">
                    <div className="container">
                        <div className="adv-grid">
                            <div className="adv-left reveal">
                                <h2>Competitive Advantage</h2>
                                <ul className="adv-list">
                                    <li><i className="fas fa-check-circle"></i> Integrated Ecosystem Control</li>
                                    <li><i className="fas fa-check-circle"></i> Resilient Multi-Revenue Streams</li>
                                    <li><i className="fas fa-check-circle"></i> Physical & Digital Asset Combination</li>
                                    <li><i className="fas fa-check-circle"></i> Capital Efficient Scalability</li>
                                </ul>
                            </div>
                            <div className="adv-right reveal">
                                <h2>Target Markets</h2>
                                <div className="market-pills">
                                    <span>India</span>
                                    <span>Middle East</span>
                                    <span>Africa</span>
                                </div>
                                <p>We focus on high-growth emerging economies where infrastructure and trading demand are peaking.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. HOW IT WORKS */}
                <section className="how-it-works reveal">
                    <div className="container text-center">
                        <h2>How We Create Value</h2>
                        <div className="flow-grid">
                            <div className="flow-step">Supplier <i className="fas fa-long-arrow-alt-right"></i></div>
                            <div className="flow-step">Vedanco <i className="fas fa-long-arrow-alt-right"></i></div>
                            <div className="flow-step">Logistics <i className="fas fa-long-arrow-alt-right"></i></div>
                            <div className="flow-step">Client <i className="fas fa-long-arrow-alt-right"></i></div>
                            <div className="flow-step success">Payment & Margin</div>
                        </div>
                    </div>
                </section>

                {/* 10. CALL TO ACTION */}
                <section className="investor-cta reveal" id="investor-form">
                    <div className="container">
                        <div className="cta-box-glass">
                            <h3>Be Part of the Growth Story</h3>
                            <p>Contact our investor relations team for more data and pitch deck access.</p>
                            <form className="mini-form">
                                <input type="email" placeholder="Your work email" required />
                                <button type="submit">Connect with Team</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Investors;
