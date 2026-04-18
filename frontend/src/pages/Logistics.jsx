import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Logistics = () => {
    const subServices = [
        {
            id: 'warehousing',
            title: 'Warehousing',
            desc: 'Our smart warehousing solutions utilize AI and robotics to manage inventory with precision. With over 5 million sq. ft. of storage across India, we provide scalable space for every business type.',
            img: '/assets/images/hero.png',
            stats: ['5M+ Sq.Ft. Space', '24/7 Security', 'Real-time Inventory']
        },
        {
            id: 'transport',
            title: 'Transport',
            desc: 'We operate a vast multi-modal transport network including rail, road, and coastal shipping. Our fleet is equipped with GPS tracking and telematics for total route visibility.',
            img: '/assets/images/join1.png',
            stats: ['500+ Heavy Vehicles', 'Green Logistics', 'GPS Tracked Fleet']
        },
        {
            id: 'supply-chain',
            title: 'Supply Chain',
            desc: 'Vedanco offers end-to-end supply chain consulting and management. We help businesses optimize their processes from raw material sourcing to final customer delivery.',
            img: '/assets/images/grid_office.png',
            stats: ['Custom Solutions', 'Cost Optimization', 'Demand Forecasting']
        },
        {
            id: 'last-mile',
            title: 'Last Mile Delivery',
            desc: 'Our last-mile delivery experts ensure that your products reach the end consumer quickly and safely, even in the most remote areas, using a hub-and-spoke distribution model.',
            img: '/assets/images/pill_logistics.png',
            stats: ['15,000+ Pin Codes', 'Express Delivery', 'OTP Verification']
        }
    ];

    const [activeService, setActiveService] = useState(subServices[0]);

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/pill_logistics.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Logistics</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Logistics</span>
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
                                <i className="fas fa-shipping-fast"></i>
                                <h4>{stat}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="vertical-selector-list reveal">
                        <h3>Service Verticals</h3>
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
                            <strong>Seamless</strong> Flow
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
<<<<<<< HEAD
            <div className="cta-box reveal">
                <h3>Looking for logistics partner?</h3>
                <p>Optimize your supply chain with Vedanco's world-class facilities.</p>
                <a href="#" className="btn-profile">Get a Quote</a>
=======
            <h2 className="section-title-alt">Advanced Supply Chain &amp; Warehousing</h2>
            <div className="verticals-link-grid">
                
                <Link to="/warehousing" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/warehousing_hero.png" alt="Warehousing" />
                        </div>
                        <div className="v-info-box">
                            <h3>Warehousing</h3>
                            <p>State-of-the-art storage facilities with real-time inventory management and robotic automation.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/transport" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/transport_hero.png" alt="Transport" />
                        </div>
                        <div className="v-info-box">
                            <h3>Transport</h3>
                            <p>A multi-modal transport network ensuring efficient point-to-point delivery across global terrain.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/supply-chain" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/supply_chain_hero.png" alt="Supply Chain" />
                        </div>
                        <div className="v-info-box">
                            <h3>Supply Chain</h3>
                            <p>End-to-end orchestration of your logistics network with AI-driven visibility and risk control.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/last-mile-delivery" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/last_mile_delivery_hero.png" alt="Last Mile Delivery" />
                        </div>
                        <div className="v-info-box">
                            <h3>Last Mile Delivery</h3>
                            <p>Connecting your brand to the doorstep of the world with hyper-local urban fulfillment.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
>>>>>>> c8256d2b3642aff57e40aaa00538627918ec6910
            </div>
        </div>
    </section>


                    </div>
</main>
    );
};

export default Logistics;
