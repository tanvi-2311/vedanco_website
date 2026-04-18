import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ImportExport = () => {
    const subServices = [
        {
            id: 'sea-cargo',
            title: 'Sea Cargo',
            desc: 'Vedanco provides global sea freight services for bulk and containerized cargo. We partner with leading maritime carriers to ensure competitive rates and timely delivery across major international shipping routes.',
            img: '/assets/images/hero.png',
            stats: ['10,000+ TEUs per month', 'Global Port Coverage', 'Door-to-Door Delivery']
        },
        {
            id: 'air-cargo',
            title: 'Air Cargo',
            desc: 'For time-sensitive shipments, our air cargo solutions offer the fastest route to global markets. We handle everything from high-value electronics to perishable goods with utmost care and speed.',
            img: '/assets/images/airport.png',
            stats: ['Dedicated Charter Services', 'Real-time Tracking', 'Temperature Controlled']
        },
        {
            id: 'global-trading',
            title: 'Global Trading',
            desc: 'We facilitate global commerce by sourcing and distributing diverse commodities. Our trade network spans across continents, focusing on quality, compliance, and mutual growth.',
            img: '/assets/images/sustainability.png',
            stats: ['Trusted Sourcing Network', 'Quality Inspections', 'B2B Trade Support']
        },
        {
            id: 'customs-clearance',
            title: 'Customs Clearance',
            desc: 'Navigating international customs is complex. Our expert team ensures your cargo clears all regulatory hurdles efficiently, minimizing delays and avoiding costly penalties.',
            img: '/assets/images/grid_office.png',
            stats: ['Expert Documentation', 'Duty Optimization', 'Regulatory Compliance']
        }
    ];

    const [activeService, setActiveService] = useState(subServices[0]);

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/hero.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Import-Export</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Import-Export</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="detail-content-section">
        <div className="container">
            <div className="detail-grid">
                <div className="detail-main-text">
                    <h2 className="reveal">Leading in {activeService.title}</h2>
                    <p className="summary-p reveal">{activeService.desc}</p>
                    
                    <div className="service-highlights reveal-stagger">
                        {activeService.stats.map((stat, idx) => (
                            <div key={idx} className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <h4>{stat}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="vertical-selector-list reveal">
                        <h3>Our Core Services</h3>
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
                            <strong>Global</strong> Reach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <div className="cta-box reveal">
                <h3>Ready to expand your global trade?</h3>
                <p>Connect with our experts to streamline your international supply chain.</p>
                <a href="#" className="btn-profile">Contact Us</a>
            </div>
        </div>
    </section>


                    </div>
</main>
    );
};

export default ImportExport;
