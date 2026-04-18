import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Businesses = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <section className="page-banner" style={{ backgroundImage: "url('/assets/images/hero.png')" }}>
        <div className="container banner-inner">
            <div className="banner-content-bottom">
                <h1>Businesses</h1>
                <div className="breadcrumb">
                    <Link to="/"><i className="fas fa-home"></i></Link> <span>&nbsp; &gt; Businesses</span>
                </div>
            </div>
        </div>
    </section>
            <div className="content-over-banner">

<section className="business-intro reveal">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    The Vedanco Group is more than just a name or a brand. Vedanco is a culture. A culture that encourages thinking big and taking risks. It's a can-do attitude that has been propelling us towards success across sectors. From building assets of national relevance to transforming lives through self-reliance and sustainability, we continue to contribute to India's growth...
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>
<section className="verticals-expand-section reveal">
        <div className="container">
            <h2 className="section-title-alt">Business Verticals</h2>
            <div className="verticals-link-grid reveal-stagger">
                
                {/* Vertical 1: Import-Export */}
                <Link to="/import-export" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/hero.png" alt="Import-Export" />
                        </div>
                        <div className="v-info-box">
                            <h3>Import–Export</h3>
                            <p>Global trading facilitators bridging international markets with precision cargo solutions.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 2: Logistics */}
                <Link to="/logistics" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/pill_logistics.png" alt="Logistics" />
                        </div>
                        <div className="v-info-box">
                            <h3>Logistics</h3>
                            <p>End-to-end supply chain management with advanced warehousing and distribution.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 3: Manpower */}
                <Link to="/manpower" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/join1.png" alt="Manpower" />
                        </div>
                        <div className="v-info-box">
                            <h3>Manpower</h3>
                            <p>Providing skilled human capital and specialized staffing for global organizations.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 4: Interior Design */}
                <Link to="/interior-design" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/grid_office.png" alt="Interior Design" />
                        </div>
                        <div className="v-info-box">
                            <h3>Interior Design</h3>
                            <p>Creating workspaces that inspire productivity and innovative architectural environments.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 5: Recycling */}
                <Link to="/recycling" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/sustainability.png" alt="Recycling" />
                        </div>
                        <div className="v-info-box">
                            <h3>Recycling</h3>
                            <p>Driving sustainability through advanced circular economy and waste management initiatives.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 6: Software Solutions */}
                <Link to="/software-solutions" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/join2.png" alt="Software Solutions" />
                        </div>
                        <div className="v-info-box">
                            <h3>Software Solutions</h3>
                            <p>Digital transformation through custom software engineering, AI, and cloud automation.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 7: Aviation */}
                <Link to="/aviation" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/airport.png" alt="Aviation" />
                        </div>
                        <div className="v-info-box">
                            <h3>Aviation</h3>
                            <p>High-tier airport management, executive jets, and specialized aviation infrastructure.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

                {/* Vertical 8: Energy & Carbon Credits */}
                <Link to="/energy" className="v-card-link">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="assets/images/grid_solar.png" alt="Energy" />
                        </div>
                        <div className="v-info-box">
                            <h3>Energy &amp; Carbon Credits</h3>
                            <p>Powering tomorrow with clean renewable energy and global carbon asset management.</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    </section>
<section className="investors-preview-full reveal">
        <div className="container">
            <div className="investor-header">
                <h2>Investor Relations</h2>
                <a href="#" className="btn-view-all">View All</a>
            </div>
            <div className="investor-grid">
                <div className="investor-card">
                    <img src="assets/images/grid_office.png" alt="Results" />
                    <div className="investor-copy">
                        <h4>Vedanco Portfolio FY25 Q3 Results</h4>
                        <p>Detailed performance highlights and financial statements for current quarter.</p>
                    </div>
                </div>
                <div className="investor-card">
                    <img src="assets/images/sustainability.png" alt="ESG Report" />
                    <div className="investor-copy">
                        <h4>ESG FY25 Q3 Report</h4>
                        <p>Reviewing our environmental milestones and community impact programs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section className="security-alert">
        <div className="container">
          <div className="security-content">
            <h3>SECURITY ALERT - Beware of Fraudulent Communications</h3>
            <div className={`security-expandable-content ${isExpanded ? 'active' : ''}`}>
              <p>It has come to our attention that certain unauthorised individuals and entities are falsely claiming to represent the Vedanco Group and attempting to solicit money from members of the public under the pretext of vendor registration, recruitment, job offers, interviews, training programmes or other business opportunities.</p>
              <p>The Vedanco Group and its entities do not charge any fees or request any payment for:</p>
              <ul>
                <li>Vendor or supplier registration or onboarding</li>
                <li>Job applications, recruitment processes or employment offers</li>
                <li>Interviews, training programmes or onboarding formalities</li>
                <li>Any request for money in connection with the above should be treated as fraudulent.</li>
              </ul>
              <p>We strongly advise individuals and businesses to exercise caution and verify all communications exclusively through official Vedanco Group channels and domain-based email addresses.</p>
              <p>The Vedanco Group and its entities disclaim any liability for loss, damage, financial harm, data compromise or claims arising from dealings with unauthorised persons or fraudulent communications.</p>
            </div>
            <a href="javascript:void(0)" className="read-less" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </a>
          </div>
        </div>
      </section>
    </div>
</main>
    );
};

export default Businesses;
