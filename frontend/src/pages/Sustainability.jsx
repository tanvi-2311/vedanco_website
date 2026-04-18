import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Sustainability = () => {
    const [counts, setCounts] = useState({
        waste: 0,
        co2: 0,
        energy: 0,
        clients: 0
    });

    const targetCounts = {
        waste: 50000,
        co2: 12000,
        energy: 8500,
        clients: 450
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 50;
        const interval = duration / steps;
        
        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            setCounts({
                waste: Math.floor((targetCounts.waste / steps) * currentStep),
                co2: Math.floor((targetCounts.co2 / steps) * currentStep),
                energy: Math.floor((targetCounts.energy / steps) * currentStep),
                clients: Math.floor((targetCounts.clients / steps) * currentStep)
            });
            
            if (currentStep === steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="sustainability-page">
            {/* 1. HERO SECTION */}
            <section className="page-banner sustainability-hero" style={{ 
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/images/sustainability.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container banner-inner">
                    <div className="banner-content-bottom">
                        <h1 className="reveal">Sustainable Growth. <br/>Responsible Future.</h1>
                        <p className="reveal subtitle">Transforming Waste into Value and Energy into Opportunity</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span> &gt; </span> <span>Sustainability</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content-over-banner">
                {/* 2. OUR SUSTAINABILITY VISION */}
                <section className="vision-section reveal">
                    <div className="container">
                        <div className="vision-content">
                            <div className="vision-text">
                                <span className="tag green">OUR VISION</span>
                                <h2>Building a Waste-to-Value Ecosystem</h2>
                                <p>Vedanco Group aims to integrate recycling, renewable energy, and carbon credit systems into a single sustainable model.</p>
                            </div>
                            <div className="vision-grid reveal-stagger">
                                <div className="vision-item">
                                    <i className="fas fa-trash-restore"></i>
                                    <p>Reducing industrial waste</p>
                                </div>
                                <div className="vision-item">
                                    <i className="fas fa-recycle"></i>
                                    <p>Creating reusable raw materials</p>
                                </div>
                                <div className="vision-item">
                                    <i className="fas fa-leaf"></i>
                                    <p>Supporting green energy solutions</p>
                                </div>
                                <div className="vision-item">
                                    <i className="fas fa-sync-alt"></i>
                                    <p>Building a circular economy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3, 4, 5. SERVICES SECTIONS */}
                <section className="sus-services-section">
                    <div className="container">
                        <div className="sus-services-grid">
                            
                            {/* Recycling */}
                            <div className="sus-service-card reveal">
                                <div className="sus-card-img">
                                    <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000" alt="Recycling" />
                                    <div className="sus-tag">RECYCLING</div>
                                </div>
                                <div className="sus-card-body">
                                    <h3>Recycling & Waste Management</h3>
                                    <ul>
                                        <li>Plastic Waste Processing</li>
                                        <li>Industrial Waste Handling</li>
                                        <li>Granule Production</li>
                                    </ul>
                                    <p>We convert industrial waste into reusable materials, closing the loop on plastic production.</p>
                                    <div className="model-highlight">
                                        <span>Model:</span> ₹20–₹30 per kg margin
                                    </div>
                                </div>
                            </div>

                            {/* Energy */}
                            <div className="sus-service-card reveal">
                                <div className="sus-card-img">
                                    <img src="/assets/images/grid_solar.png" alt="Solar" />
                                    <div className="sus-tag">ENERGY</div>
                                </div>
                                <div className="sus-card-body">
                                    <h3>Energy & Renewable Solutions</h3>
                                    <ul>
                                        <li>Solar Projects</li>
                                        <li>Renewable Energy Systems</li>
                                        <li>Industrial Energy Solutions</li>
                                    </ul>
                                    <p>Providing clean and sustainable energy frameworks for industrial and commercial sectors.</p>
                                    <div className="model-highlight">
                                        <span>Focus:</span> Future-ready infrastructure
                                    </div>
                                </div>
                            </div>

                            {/* Carbon Credit */}
                            <div className="sus-service-card reveal">
                                <div className="sus-card-img">
                                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000" alt="Carbon" />
                                    <div className="sus-tag">CARBON</div>
                                </div>
                                <div className="sus-card-body">
                                    <h3>Carbon Credit Business</h3>
                                    <ul>
                                        <li>Carbon Credit Generation</li>
                                        <li>Carbon Credit Trading</li>
                                    </ul>
                                    <p>Helping industries reduce their carbon footprint while generating sustainable green revenue streams.</p>
                                    <div className="model-highlight">
                                        <span>Market:</span> Global trading opportunity
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 6. OUR IMPACT */}
                <section className="impact-section reveal">
                    <div className="container">
                        <h2 className="section-title text-center">OUR IMPACT</h2>
                        <div className="impact-grid">
                            <div className="impact-counter">
                                <div className="counter-val">{counts.waste.toLocaleString()}+</div>
                                <p>Tons Recycled</p>
                            </div>
                            <div className="impact-counter">
                                <div className="counter-val">{counts.co2.toLocaleString()}+</div>
                                <p>CO₂ Reduced (Tons)</p>
                            </div>
                            <div className="impact-counter">
                                <div className="counter-val">{counts.energy.toLocaleString()}</div>
                                <p>MW Energy Generated</p>
                            </div>
                            <div className="impact-counter">
                                <div className="counter-val">{counts.clients.toLocaleString()}+</div>
                                <p>Global Clients</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. WHY SUSTAINABILITY MATTERS */}
                <section className="why-section reveal">
                    <div className="container">
                        <div className="why-grid">
                            <div className="why-left">
                                <h2>Why Sustainability Matters?</h2>
                                <p>In an era of depleting resources, corporate responsibility is the only way forward for long-term growth.</p>
                            </div>
                            <div className="why-right">
                                <div className="why-reason">
                                    <h4>Environmental Protection</h4>
                                    <p>Preserving biodiversity and reducing pollution through circular models.</p>
                                </div>
                                <div className="why-reason">
                                    <h4>Cost Optimization</h4>
                                    <p>Industries save significant costs by reusing waste and adopting green energy.</p>
                                </div>
                                <div className="why-reason">
                                    <h4>Global Compliance</h4>
                                    <p>Adherence to international standards like ISO and ESG frameworks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CALL TO ACTION */}
                <section className="cta-full reveal">
                    <div className="container">
                        <div className="cta-content">
                            <h3>Partner With Us for Sustainable Growth</h3>
                            <p>Build a greener future while scaling your industrial efficiency.</p>
                            <Link to="/contact" className="btn-know-more">Get a Quote</Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default Sustainability;
