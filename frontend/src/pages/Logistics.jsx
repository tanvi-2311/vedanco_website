import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const Logistics = () => {
    

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


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Logistics provides end-to-end solutions that optimize the flow of goods, reducing costs and increasing speed-to-market for our clients.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
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
            </div>
        </div>
    </section>


                    </div>
</main>
    );
};

export default Logistics;
