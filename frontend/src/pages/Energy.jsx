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
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/pill_logistics.png" alt="Solar &amp; Wind" />
                        </div>
                        <div className="v-info-box">
                            <h3>Solar &amp; Wind</h3>
                            <p>Developing hundreds of megawatts of clean energy projects to power the national grid sustainably.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/hero.png" alt="Carbon Assets" />
                        </div>
                        <div className="v-info-box">
                            <h3>Carbon Assets</h3>
                            <p>Managing global carbon credit portfolios to help international organizations achieve their net-zero targets.</p>
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

export default Energy;
