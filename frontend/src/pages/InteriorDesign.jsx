import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const InteriorDesign = () => {
    

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/grid_office.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Interior Design</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Interior Design</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Interior Design blends modern aesthetics with functional engineering to create workspaces and residential environments that inspire.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Designing for the Future</h2>
            <div className="verticals-link-grid">
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/sustainability.png" alt="Premium Finishes" />
                        </div>
                        <div className="v-info-box">
                            <h3>Premium Finishes</h3>
                            <p>Using the finest sustainable materials to create high-durability, luxury environments.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/join2.png" alt="Modern Architecture" />
                        </div>
                        <div className="v-info-box">
                            <h3>Modern Architecture</h3>
                            <p>Innovative floor plans and spatial designs that maximize productivity and natural light.</p>
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

export default InteriorDesign;
