import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const Energy = () => {
    

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/grid_solar.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Energy &amp; Carbon Credits</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Energy &amp; Carbon Credits</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Energy is a leader in large-scale renewable power generation and innovative carbon credit management for global markets.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Renewable Future &amp; Net-Zero Credits</h2>
            <div className="verticals-link-grid">
                
                <Link to="/carbon-credits" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/sustainability.png" alt="Carbon Credits" />
                        </div>
                        <div className="v-info-box">
                            <h3>Carbon Credits</h3>
                            <p>Managing global carbon credit portfolios to help international organizations achieve net-zero targets.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/solar-energy" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/grid_solar.png" alt="Solar Energy" />
                        </div>
                        <div className="v-info-box">
                            <h3>Solar Energy</h3>
                            <p>Developing hundreds of megawatts of ultra-efficient solar projects to power the national grid.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>
                <Link to="/wind-power" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/pill_energy.png" alt="Wind Power" />
                        </div>
                        <div className="v-info-box">
                            <h3>Wind Power</h3>
                            <p>Harnessing consistent high-velocity atmospheric currents with next-gen onshore and offshore turbines.</p>
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

export default Energy;
