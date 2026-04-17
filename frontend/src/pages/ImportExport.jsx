import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const ImportExport = () => {
    

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


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Group's Import-Export division is the backbone of our international trade operations, providing seamless connectivity between global markets and local industries.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Global Trading &amp; Customs Solutions</h2>
            <div className="verticals-link-grid">
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/join1.png" alt="Sea &amp; Air Cargo" />
                        </div>
                        <div className="v-info-box">
                            <h3>Sea &amp; Air Cargo</h3>
                            <p>Global logistics management through major international ports and airports, ensuring timely delivery and safety.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/grid_office.png" alt="Customs Clearance" />
                        </div>
                        <div className="v-info-box">
                            <h3>Customs Clearance</h3>
                            <p>Expert handling of complex documentation and regulatory requirements across multiple jurisdictions.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/sustainability.png" alt="Connecting the World" />
                        </div>
                        <div className="v-info-box">
                            <h3>Connecting the World</h3>
                            <p>We provide comprehensive trading solutions that include bulk commodity sourcing, quality inspection, and end-to-end logistics. Our team leverages advanced tracking technology to monitor cargo in real-time, providing transparency and reliability to our global partners.</p>
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

export default ImportExport;
