import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';

const Manpower = () => {
    

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/join1.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Manpower</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> <span> &gt; </span> <Link to="/businesses">Businesses</Link> <span> &gt; Manpower</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">


    <section className="business-intro">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    Vedanco Manpower solutions provide industry-leading staffing and talent management services across multiple sectors, driving organizational growth with skilled professionals.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt">Empowering Human Capital</h2>
            <div className="verticals-link-grid">
                
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/grid_office.png" alt="Technical Staffing" />
                        </div>
                        <div className="v-info-box">
                            <h3>Technical Staffing</h3>
                            <p>Direct placement and outsourcing of highly skilled engineers, technicians, and digital professionals.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/sustainability.png" alt="Skill Development" />
                        </div>
                        <div className="v-info-box">
                            <h3>Skill Development</h3>
                            <p>Continuous training and certification programs to keep our workforce at the top of their field.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>
                <a href="#" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/join2.png" alt="Strategic Talent Acquisition" />
                        </div>
                        <div className="v-info-box">
                            <h3>Strategic Talent Acquisition</h3>
                            <p>We leverage our global network to find the right people for the right jobs. From temporary project-based staffing to permanent executive placements, our HR solutions are tailored to meet unique business demands.</p>
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

export default Manpower;
