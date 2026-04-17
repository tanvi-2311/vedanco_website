import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const Aviation = () => {
    

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/airport.png')" }}>
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


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Aviation specializes in high-tier terminal management and specialized executive aircraft services, ensuring seamless global connectivity.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Advanced Aviation Infrastructure</h2>
            <div className="verticals-link-grid">
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/grid_solar.png" alt="Terminal Operations" />
                        </div>
                        <div className="v-info-box">
                            <h3>Terminal Operations</h3>
                            <p>Managing world-class airport facilities with a focus on passenger comfort and operational efficiency.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/pill_logistics.png" alt="MRO Services" />
                        </div>
                        <div className="v-info-box">
                            <h3>MRO Services</h3>
                            <p>Comprehensive maintenance, repair, and overhaul services for a wide range of commercial and private aircraft.</p>
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

export default Aviation;
