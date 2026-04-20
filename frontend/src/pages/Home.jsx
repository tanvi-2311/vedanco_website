import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [isExpanded, setIsExpanded] = useState(true); // Default to expanded for now as in the user's view
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const heroSlides = [
    { bg: '/assets/images/hero_office.png', title: 'Building Infrastructure for a New Era.', pill: '/assets/images/pill_port.png', label: 'Ports' },
    { 
      bg: '/assets/images/transport_hero.png', 
      video: 'https://videos.pexels.com/video-files/4440958/4440958-uhd_2560_1440_30fps.mp4',
      title: 'Global Logistics Redefined.', 
      pill: '/assets/images/pill_logistics.png', 
      label: 'Logistics' 
    },
    { bg: '/assets/images/smart_terminals_hero.png', title: 'Future-Ready Aviation Hubs.', pill: '/assets/images/smart_terminals_hero.png', label: 'Airports' },
    { bg: '/assets/images/grid_solar.png', title: 'Efficient Sustainable Energy Solutions.', pill: '/assets/images/pill_logistics.png', label: 'Energy' },
    { bg: '/assets/images/join1.png', title: 'Empowering Growth Across Sectors.', pill: '/assets/images/join1.png', label: 'People' }
  ];

  const [activeHero, setActiveHero] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeHero]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const handlePillClick = (index) => {
    if (index === activeHero) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveHero(index);
      setIsTransitioning(false);
    }, 800);
  };

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
      featureImg: '/assets/images/smart_terminals_hero.png',
      tileImg: '/assets/images/smart_terminals_hero.png',
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
        <div 
          className="hero-image-bg" 
          style={{ backgroundImage: `url(${heroSlides[activeHero].bg})` }}
        ></div>
        
        {heroSlides[activeHero].video && (
          <video 
            key={heroSlides[activeHero].video}
            autoPlay 
            muted 
            loop 
            playsInline 
            poster={heroSlides[activeHero].bg}
            className="hero-video-bg"
          >
            <source src={heroSlides[activeHero].video} type="video/mp4" />
          </video>
        )}
        
        <div className="hero-overlay"></div>
        <div className="container hero-flex-container">
          <div className={`hero-content ${isTransitioning ? 'exit' : 'enter'}`}>
            <span className="hero-category-tag">VEDANCO GROUP</span>
            <h1>{heroSlides[activeHero].title}</h1>
            <div className="hero-btn-group">
                <Link to="/about" className="btn-know-more">Know More</Link>
                <div className="scroll-indicator">
                    <span className="mouse"></span>
                    <span className="text">Scroll Down</span>
                </div>
            </div>
          </div>
        </div>

        <div className="hero-slider-wrapper">
          <div className={`hero-right-tiles bottom-nav ${isTransitioning ? 'exit' : 'enter'}`}>
              {heroSlides.map((slide, index) => (
                  <div 
                    key={index} 
                    className={`stagger-tile tile-${index} ${activeHero === index ? 'active-tile' : ''}`} 
                    style={{backgroundImage: `url(${slide.bg})` || `url(${slide.video})` }}
                    onClick={() => handlePillClick(index)}
                  >
                      <div className="tile-hover-info">
                          <span>{slide.label}</span>
                      </div>
                  </div>
              ))}
          </div>

          <div className="slider-controls">
            <button className="slider-prev" onClick={() => setActiveHero((activeHero - 1 + heroSlides.length) % heroSlides.length)}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {heroSlides.map((_, index) => (
                <div 
                  key={index} 
                  className={`dot ${activeHero === index ? 'active' : ''}`}
                  onClick={() => setActiveHero(index)}
                ></div>
              ))}
            </div>
            <button className="slider-next" onClick={() => setActiveHero((activeHero + 1) % heroSlides.length)}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* About Section Full-Width */}
      <section className="about-section" id="about">
        <div className="about-grid-full">
          <div className="chairman-container reveal">
            <img src="/assets/images/chairman_new.png.jpeg" alt="Chairman Portrait" className="chairman-img" />
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
              <div className="news-thumb"><img src="/assets/images/news1.png" alt="News 3" /></div>
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
