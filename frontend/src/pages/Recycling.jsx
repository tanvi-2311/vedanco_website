import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const Recycling = () => {
    

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Recycling</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Recycling</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Recycling is committed to a waste-free future by implementing advanced reprocessing technologies for industrial and post-consumer waste.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Circular Economy &amp; Sustainability</h2>
            <div className="verticals-link-grid">
                
                <Link to="/waste-recycling" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/pill_recycling.png" alt="Waste Recycling" />
                        </div>
                        <div className="v-info-box">
                            <h3>Waste Recycling</h3>
                            <p>Advanced facilities for plastics, metals, and electronics recycling into high-grade raw materials for industry.</p>
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

export default Recycling;
