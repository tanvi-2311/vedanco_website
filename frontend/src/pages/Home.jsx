import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Building Infrastructure for a New Era.</h1>
            <a href="#" className="btn-know-more">Know More</a>
          </div>
        </div>
        <div className="hero-slider-wrapper">
          <div className="hero-slider">
            <div className="slide-pill active" data-bg="assets/images/hero.png"><img src="/assets/images/pill_port.png" alt="Ports" /></div>
            <div className="slide-pill" data-bg="assets/images/pill_logistics.png"><img src="/assets/images/pill_logistics.png" alt="Logistics" /></div>
            <div className="slide-pill" data-bg="assets/images/airport.png"><img src="/assets/images/airport.png" alt="Airports" /></div>
            <div className="slide-pill" data-bg="assets/images/grid_solar.png"><img src="/assets/images/grid_solar.png" alt="Energy" /></div>
            <div className="slide-pill" data-bg="assets/images/join1.png"><img src="/assets/images/join1.png" alt="People" /></div>
            <div className="slide-pill" data-bg="assets/images/grid_city.png"><img src="/assets/images/grid_city.png" alt="Infrastructure" /></div>
            <div className="slide-pill" data-bg="assets/images/grid_stadium.png"><img src="/assets/images/grid_stadium.png" alt="Social" /></div>
          </div>
          <div className="slider-controls">
            <button className="slider-prev"><i className="fas fa-chevron-left"></i></button>
            <div className="slider-dots"></div>
            <button className="slider-next"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      {/* About Section Full-Width */}
      <section className="about-section" id="about">
        <div className="about-grid-full">
          <div className="chairman-container">
            <img src="/assets/images/chairman.png" alt="Chairman Portrait" className="chairman-img" />
          </div>
          <div className="about-text">
            <div className="text-content-wrapper">
              <h2>Leading with Vision, <br />Impacting Lives.</h2>
              <div className="profile-text-collapsed" id="profile-text">
                <p className="quote">"Building infrastructure is building the future. We believe that world-class facilities are the backbone of a thriving nation."</p>
                <p>At Vedanco Group, our commitment to excellence has propelled us to the forefront of global logistics, energy, and resources. We don't just build ports and airports; we build gateways to the future.</p>
                <p>Through our integrated business model, we ensure that every facet of our operations contributes to the broader goal of nation-building. Sustainability is at the core of everything we do, ensuring that our growth today does not compromise the environment of tomorrow.</p>
              </div>
              <button className="btn-profile" id="view-profile-btn">View Profile</button>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Section */}
      <section className="grid-feature-section" id="businesses">
        <div className="container">
          <div className="section-header-flex">
            <h2 className="section-title">BUSINESSES</h2>
            <div className="business-tabs">
              <span className="tab-item active">Verticals</span>
              <span className="tab-item">Listed Companies</span>
            </div>
          </div>
          
          <div className="business-layout-grid">
            <div className="small-grid-8">
              <Link to="/import-export" className="biz-tile active-gradient" data-feature-img="assets/images/hero.png" data-subnav="Shipping,Cargo,Global Hub,Customs">
                <div className="biz-info">
                  <span>Import–Export</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
              <Link to="/logistics" className="biz-tile" data-feature-img="assets/images/pill_logistics.png" data-subnav="Warehousing,Transport,Last Mile,Supply Chain">
                <img src="/assets/images/hero.png" alt="Logistics" />
                <div className="biz-label">Logistics</div>
              </Link>
              <Link to="/manpower" className="biz-tile" data-feature-img="assets/images/join1.png" data-subnav="Staffing,Training,Recruitment,HR Outsourcing">
                <img src="/assets/images/join1.png" alt="Manpower" />
                <div className="biz-label">Manpower</div>
              </Link>
              <Link to="/interior-design" className="biz-tile" data-feature-img="assets/images/grid_office.png" data-subnav="Workspace,Residential,Premium,Consulting">
                <img src="/assets/images/grid_office.png" alt="Interior Design" />
                <div className="biz-label">Interior Design</div>
              </Link>
              <Link to="/recycling" className="biz-tile" data-feature-img="assets/images/sustainability.png" data-subnav="Waste to Energy,E-Waste,Paper,Sustainable Dev">
                <img src="/assets/images/sustainability.png" alt="Recycling" />
                <div className="biz-label">Recycling</div>
              </Link>
              <Link to="/software-solutions" className="biz-tile" data-feature-img="assets/images/join2.png" data-subnav="Custom Dev,Cloud,Cybersecurity,AI Automation">
                <img src="/assets/images/join2.png" alt="Software Solutions" />
                <div className="biz-label">Software Solutions</div>
              </Link>
              <Link to="/aviation" className="biz-tile" data-feature-img="assets/images/airport.png" data-subnav="Airlines,Executive Jets,Cargo Services,Smart Terminals">
                <img src="/assets/images/airport.png" alt="Aviation" />
                <div className="biz-label">Aviation</div>
              </Link>
              <Link to="/energy" className="biz-tile" data-feature-img="assets/images/grid_solar.png" data-subnav="Carbon Credit,Solar,Wind,Green Hydrogen">
                <img src="/assets/images/grid_solar.png" alt="Energy" />
                <div className="biz-label">Energy & Carbon Credit</div>
              </Link>
            </div>
            
            <div className="featured-biz-area">
              <div className="main-feature-img">
                <img src="/assets/images/airport.png" alt="Aviation Hub" />
                <div className="feature-overlay-nav">
                  <ul className="feature-subnav">
                    <li className="active">Airlines</li>
                    <li>Executive Jets</li>
                    <li>Cargo Services</li>
                    <li>Smart Terminals</li>
                  </ul>
                  <div className="explore-line"></div>
                  <a href="#" className="explore-link">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="sustainability-banner" id="sustainability">
        <div className="sustainability-content">
          <h3>FOR A SUSTAINABLE TOMORROW</h3>
          <p>100 MILLION TREES PLEDGE</p>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <h2>Latest News</h2>
            <a href="#" className="view-all">View All &nbsp; <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="news-cards">
            <div className="news-card">
              <div className="news-thumb"><img src="/assets/images/news1.png" alt="News 1" /></div>
              <div className="news-body">
                <h4>Vedanco Port Achieves Record Throughput in Q4</h4>
                <p>Significant growth in operational efficiency leads to milestones in maritime logistics.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-thumb"><img src="/assets/images/grid_solar.png" alt="News 2" /></div>
              <div className="news-body">
                <h4>Expansion of Green Energy Portfolio across 5 States</h4>
                <p>Adding 5GW capacity to our renewable energy grid by 2026.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-thumb"><img src="/assets/images/airport.png" alt="News 3" /></div>
              <div className="news-body">
                <h4>Unveiling the Future of Smart Airports</h4>
                <p>Digital transformation initiatives at Vedanco Terminals set new industry benchmarks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-section" id="careers">
        <div className="container">
          <div className="join-header-flex">
            <div className="join-titles">
              <h2>JOIN US</h2>
              <p>We foster a culture where people with a can-do attitude can be a part of our growing team across Vedanco businesses.</p>
            </div>
            <a href="#" className="btn-know-more-dark">Know More</a>
          </div>
          <div className="join-cards-layout">
            <div className="join-card-wide">
              <img src="/assets/images/join1.png" alt="Job Opportunities" />
              <div className="join-card-content">
                <a href="#" className="job-link">Job Opportunities <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="join-card-narrow">
              <img src="/assets/images/join2.png" alt="Our Values" />
              <div className="join-card-content">
                <span>Our Values</span>
              </div>
            </div>
            <div className="join-card-narrow">
              <img src="/assets/images/join3.png" alt="Life at Vedanco" />
              <div className="join-card-content">
                <span>Life at Vedanco</span>
              </div>
            </div>
            <div className="join-card-narrow">
              <img src="/assets/images/join4.png" alt="Diversity" />
              <div className="join-card-content">
                <span>Diversity & Inclusion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-alert">
        <div className="container">
          <div className="security-content">
            <h3>SECURITY ALERT – Beware of Fraudulent Communications</h3>
            <ul>
              <li>It has been brought to our notice that certain unscrupulous individuals/agencies are misleading the public by issuing fake job offers.</li>
              <li>Vedanco Group and its subsidiary companies do not charge any fee/money for recruitment.</li>
              <li>Please verify any communication from unauthorized domains or agents claiming to represent us.</li>
              <li>Our official website is the only source of truth for careers and business opportunities.</li>
            </ul>
            <a href="#" className="read-less">Read Less</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
