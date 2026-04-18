import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Default to expanded for now as in the user's view
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
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
  
  const businesses = [
    {
      id: 'import-export',
      title: 'Import–Export',
      path: '/import-export',
      featureImg: '/assets/images/hero.png',
      tileImg: '/assets/images/hero.png',
      subnav: ['Shipping', 'Cargo', 'Global Hub', 'Customs']
    },
    {
      id: 'logistics',
      title: 'Logistics',
      path: '/logistics',
      featureImg: '/assets/images/pill_logistics.png',
      tileImg: '/assets/images/hero.png',
      subnav: ['Warehousing', 'Transport', 'Last Mile', 'Supply Chain']
    },
    {
      id: 'manpower',
      title: 'Manpower',
      path: '/manpower',
      featureImg: '/assets/images/join1.png',
      tileImg: '/assets/images/join1.png',
      subnav: ['Staffing', 'Training', 'Recruitment', 'HR Outsourcing']
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      path: '/interior-design',
      featureImg: '/assets/images/grid_office.png',
      tileImg: '/assets/images/grid_office.png',
      subnav: ['Workspace', 'Residential', 'Premium', 'Consulting']
    },
    {
      id: 'recycling',
      title: 'Recycling',
      path: '/recycling',
      featureImg: '/assets/images/sustainability.png',
      tileImg: '/assets/images/sustainability.png',
      subnav: ['Waste to Energy', 'E-Waste', 'Paper', 'Sustainable Dev']
    },
    {
      id: 'software-solutions',
      title: 'Software Solutions',
      path: '/software-solutions',
      featureImg: '/assets/images/join2.png',
      tileImg: '/assets/images/join2.png',
      subnav: ['Custom Dev', 'Cloud', 'Cybersecurity', 'AI Automation']
    },
    {
      id: 'aviation',
      title: 'Aviation',
      path: '/aviation',
      featureImg: '/assets/images/airport.png',
      tileImg: '/assets/images/airport.png',
      subnav: ['Airlines', 'Executive Jets', 'Cargo Services', 'Smart Terminals']
    },
    {
      id: 'energy',
      title: 'Energy & Carbon Credit',
      path: '/energy',
      featureImg: '/assets/images/grid_solar.png',
      tileImg: '/assets/images/grid_solar.png',
      subnav: ['Carbon Credit', 'Solar', 'Wind', 'Green Hydrogen']
    }
  ];

  const [activeBiz, setActiveBiz] = useState(businesses[0]);

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
          <div className="chairman-container reveal">
            <img src="/assets/images/chairman.png" alt="Chairman Portrait" className="chairman-img" />
          </div>
          <div className="about-text">
            <div className="text-content-wrapper reveal">
              <h2>Leading with Vision, <br />Impacting Lives.</h2>
              <div className={`profile-text-collapsed ${isProfileExpanded ? 'profile-text-expanded' : ''}`} id="profile-text">
                <p className="quote">"Building infrastructure is building the future. We believe that world-class facilities are the backbone of a thriving nation."</p>
                <p>At Vedanco Group, our commitment to excellence has propelled us to the forefront of global logistics, energy, and resources. We don't just build ports and airports; we build gateways to the future.</p>
                <p>Through our integrated business model, we ensure that every facet of our operations contributes to the broader goal of nation-building. Sustainability is at the core of everything we do, ensuring that our growth today does not compromise the environment of tomorrow.</p>
              </div>
              <button 
                className="btn-profile" 
                id="view-profile-btn"
                onClick={() => setIsProfileExpanded(!isProfileExpanded)}
              >
                {isProfileExpanded ? 'Hide Profile' : 'View Profile'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Section */}
      <section className="grid-feature-section" id="businesses">
        <div className="container">
          <div className="section-header-flex reveal">
            <h2 className="section-title">BUSINESSES</h2>
            <div className="business-tabs">
              <span className="tab-item active">Verticals</span>
              <span className="tab-item">Listed Companies</span>
            </div>
          </div>
          
          <div className="business-layout-grid">
            <div className="small-grid-8">
              {businesses.map((biz) => (
                <div 
                  key={biz.id}
                  className={`biz-tile ${activeBiz.id === biz.id ? 'active-gradient' : ''}`}
                  onMouseEnter={() => setActiveBiz(biz)}
                  onClick={() => window.location.href = biz.path}
                >
                  {activeBiz.id === biz.id ? (
                    <div className="biz-info">
                      <span>{biz.title}</span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  ) : (
                    <>
                      <img src={biz.tileImg} alt={biz.title} />
                      <div className="biz-label">{biz.title}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="featured-biz-area">
              <div className="main-feature-img">
                <img src={activeBiz.featureImg} alt={activeBiz.title} />
                <div className="feature-overlay-nav">
                  <ul className="feature-subnav">
                    {activeBiz.subnav.map((item, idx) => (
                      <li key={idx} className={idx === 0 ? 'active' : ''}>{item}</li>
                    ))}
                  </ul>
                  <div className="explore-line"></div>
                  <Link to={activeBiz.path} className="explore-link">Explore More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="sustainability-banner reveal" id="sustainability">
        <div className="sustainability-content">
          <h3>FOR A SUSTAINABLE TOMORROW</h3>
          <p>100 MILLION TREES PLEDGE</p>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section" id="news">
        <div className="container">
          <div className="news-header reveal">
            <h2>Latest News</h2>
            <a href="#" className="view-all">View All &nbsp; <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="news-cards reveal-stagger">
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
          <div className="join-header-flex reveal">
            <div className="join-titles">
              <h2>JOIN US</h2>
              <p>We foster a culture where people with a can-do attitude can be a part of our growing team across Vedanco businesses.</p>
            </div>
            <a href="#" className="btn-know-more-dark">Know More</a>
          </div>
          <div className="join-cards-layout reveal-stagger">
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
    </main>
  );
};

export default Home;
