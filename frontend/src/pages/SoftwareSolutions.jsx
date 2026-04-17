import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const SoftwareSolutions = () => {
    

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/join2.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Software Solutions</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Software Solutions</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Software Solutions empowers enterprises with custom AI development, cloud architecture, and high-performance digital engineering.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Digital Transformation &amp; Engineering</h2>
            <div className="verticals-link-grid">
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/airport.png" alt="AI &amp; Automation" />
                        </div>
                        <div className="v-info-box">
                            <h3>AI &amp; Automation</h3>
                            <p>Integrating artificial intelligence into business workflows to drive unprecedented efficiency and data insights.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/grid_solar.png" alt="Cloud Infrastructure" />
                        </div>
                        <div className="v-info-box">
                            <h3>Cloud Infrastructure</h3>
                            <p>Designing and managing robust, scalable cloud environments for global SaaS and enterprise platforms.</p>
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

export default SoftwareSolutions;
