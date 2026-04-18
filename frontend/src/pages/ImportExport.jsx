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
                
                <Link to="/sea-cargo" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/join1.png" alt="Sea Cargo" />
                        </div>
                        <div className="v-info-box">
                            <h3>Sea Cargo</h3>
                            <p>Global logistics management through major international ports, ensuring timely delivery and safety.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/air-cargo" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/hero.png" alt="Air Cargo" />
                        </div>
                        <div className="v-info-box">
                            <h3>Air Cargo</h3>
                            <p>High-speed global delivery solutions for time-critical and high-value cargo across continents.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/global-trading" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/sustainability.png" alt="Global Trading" />
                        </div>
                        <div className="v-info-box">
                            <h3>Global Trading</h3>
                            <p>Comprehensive trading solutions including bulk commodity sourcing and end-to-end supply chain integration.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/customs-clearance" className="v-card-link">
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
                </Link>
            </div>
        </div>
    </section>


                    </div>
</main>
    );
};

export default ImportExport;
