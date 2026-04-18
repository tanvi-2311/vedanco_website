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
