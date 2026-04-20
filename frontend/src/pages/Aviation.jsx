import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Aviation = () => {
    const subServices = [
        {
            id: 'terminal-ops',
            title: 'Terminal Operations',
            desc: 'We manage world-class airport terminals with a focus on passenger comfort and operational efficiency. Our smart terminals use biometric boarding and advanced logistics to handle millions of travelers.',
            img: '/assets/images/smart_terminals_hero.png',
            stats: ['50M+ Capacity', 'Smart Biometrics', 'Modern Lounges']
        },
        {
            id: 'executive-jets',
            title: 'Executive Jets',
            desc: 'Our private aviation division provides bespoke travel solutions for corporate leaders and high-net-worth individuals, ensuring privacy, luxury, and point-to-point speed.',
            img: '/assets/images/join1.png',
            stats: ['Bespoke Luxury', 'Global Flight Rights', 'PWC Maintenance']
        },
        {
            id: 'cargo-services',
            title: 'Cargo Services',
            desc: 'Aviation cargo is critical for high-value and perishable items. Our air terminals are equipped with cold chain facilities and automated sorting systems for maximum efficiency.',
            img: '/assets/images/hero.png',
            stats: ['Automated Sorting', 'Cold Chain Ready', 'Security Cleared']
        }
    ];

    const [activeService, setActiveService] = useState(subServices[0]);

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/smart_terminals_hero.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Aviation</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Aviation</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="detail-content-section">
        <div className="container">
            <div className="detail-grid">
                <div className="detail-main-text">
                    <h2 className="reveal">Excellence in {activeService.title}</h2>
                    <p className="summary-p reveal">{activeService.desc}</p>
                    
                    <div className="service-highlights reveal-stagger">
                        {activeService.stats.map((stat, idx) => (
                            <div key={idx} className="highlight-item">
                                <i className="fas fa-plane"></i>
                                <h4>{stat}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="vertical-selector-list reveal">
                        <h3>Aviation Verticals</h3>
                        <ul>
                            {subServices.map((service) => (
                                <li 
                                    key={service.id} 
                                    className={activeService.id === service.id ? 'active' : ''}
                                    onClick={() => setActiveService(service)}
                                >
                                    {service.title} <i className="fas fa-arrow-right"></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="detail-side-media reveal">
                    <div className="round-card-wrapper">
                        <img src={activeService.img} alt={activeService.title} className="round-card" />
                        <div className="info-pill">
                            <strong>Higher</strong> Flying
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2 className="section-title-alt">Advanced Aviation Infrastructure</h2>
            <div className="verticals-link-grid">
                
                <Link to="/airlines" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/airlines_hero.png" alt="Airlines" />
                        </div>
                        <div className="v-info-box">
                            <h3>Airlines</h3>
                            <p>International passenger excellence with a focus on hospitality and global connectivity.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/executive-jets" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/executive_jets_hero.png" alt="Executive Jets" />
                        </div>
                        <div className="v-info-box">
                            <h3>Executive Jets</h3>
                            <p>Privacy and luxury on-demand for global travel with our elite fleet of private jets.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/smart-terminals" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/smart_terminals_hero.png" alt="Smart Terminals" />
                        </div>
                        <div className="v-info-box">
                            <h3>Smart Terminals</h3>
                            <p>Next-gen airport infrastructure powered by biometrics and real-time AI flow monitoring.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/aviation-cargo" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/aviation_cargo_hero.png" alt="Cargo Services" />
                        </div>
                        <div className="v-info-box">
                            <h3>Aviation Cargo</h3>
                            <p>Specialized air-freight and technical handling for critical industrial and tech assets.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </section>


                    </div>
</main>
    );
};

export default Aviation;
