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
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/hero.png" alt="Smart Warehousing" />
                        </div>
                        <div className="v-info-box">
                            <h3>Smart Warehousing</h3>
                            <p>State-of-the-art storage facilities with real-time inventory management and automation.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/join1.png" alt="Distribution Fleet" />
                        </div>
                        <div className="v-info-box">
                            <h3>Distribution Fleet</h3>
                            <p>A multi-modal transport network ensuring last-mile delivery across thousands of zip codes.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/grid_office.png" alt="Efficiency in Motion" />
                        </div>
                        <div className="v-info-box">
                            <h3>Efficiency in Motion</h3>
                            <p>Our logistics ecosystem is powered by proprietary technology that predicts demand and optimizes routing. From cold storage for agri-products to heavy-lift transport for industrial equipment, we handle it all.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>


                    </div>
</main>
    );
};

export default Logistics;
