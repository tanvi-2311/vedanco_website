import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  const [isExpanded, setIsExpanded] = useState(true); // Default to expanded for now as in the user's view
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const [homeFormData, setHomeFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleHomeFormChange = (e) => {
    const { name, value } = e.target;
    setHomeFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHomeFormSubmit = async (e) => {
    e.preventDefault();
    if (!homeFormData.subject || homeFormData.subject === 'Select Requirement') {
      alert('Please select a requirement.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      let success = false;
      
      // Try local Express API first
      try {
        const apiBase = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? `http://${window.location.hostname}:5005` : '');
        if (apiBase) {
          const response = await fetch(`${apiBase}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: homeFormData.name,
              email: homeFormData.email,
              phone: '',
              subject: homeFormData.subject,
              message: homeFormData.message
            })
          });
          if (response.ok) success = true;
        }
      } catch (apiErr) {
        console.warn("Express API failed, falling back to direct Supabase insert:", apiErr);
      }

      // Fallback: Direct insert into Supabase from frontend
      if (!success) {
        const { supabase } = await import('../supabaseClient');
        const { error } = await supabase
          .from('contacts')
          .insert([
            {
              name: homeFormData.name,
              email: homeFormData.email,
              phone: '',
              subject: homeFormData.subject,
              message: homeFormData.message
            }
          ]);
        
        if (error) {
          throw new Error("Direct Supabase insert failed: " + error.message);
        }
        success = true;
      }

      if (success) {
        setSubmitStatus('success');
        setHomeFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroSlides = [
    { bg: '/assets/images/hero_office.png', title: 'Building Infrastructure for a New Era.', pill: '/assets/images/hero_office.png', label: 'Vedanco' },
    { 
      bg: '/assets/images/hero_highway_real.png', 
      title: 'Global Logistics Redefined.', 
      pill: '/assets/images/hero_highway_real.png', 
      label: 'Logistics' 
    },
    { bg: '/assets/images/smart_terminals_hero.png', title: 'Future-Ready Aviation Hubs.', pill: '/assets/images/smart_terminals_hero.png', label: 'Airports' },
    { bg: '/assets/images/solar_farm_real.png', title: 'Efficient Sustainable Energy Solutions.', pill: '/assets/images/solar_farm_real.png', label: 'Energy' },
    { bg: '/assets/images/corporate_meeting_real.png', title: 'Empowering Growth Across Sectors.', pill: '/assets/images/corporate_meeting_real.png', label: 'People' }
  ];

  const [activeHero, setActiveHero] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroOpacity = Math.max(1 - scrollY / 600, 0);
  const heroTranslate = scrollY * 0.4;

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
      featureImg: '/assets/images/global_port_real.png?v=1',
      tileImg: '/assets/images/global_port_real.png?v=1',
      subnav: ['Shipping', 'Cargo', 'Global Hub', 'Customs'],
      desc: 'Global sourcing and bulk trading of commodities including coal, scrap, textiles, and industrial materials.'
    },
    {
      id: 'logistics',
      title: 'Logistics',
      path: '/logistics',
      featureImg: '/assets/images/warehouse_hub_real.png?v=1',
      tileImg: '/assets/images/hero_highway_real.png?v=1',
      subnav: ['Warehousing', 'Transport', 'Last Mile', 'Supply Chain'],
      desc: 'Efficient transport network, freight forwarding, and delivery systems ensuring cost optimization and smooth supply chain operations.'
    },
    {
      id: 'manpower',
      title: 'Manpower',
      path: '/manpower',
      featureImg: '/assets/images/corporate_meeting_real.png?v=1',
      tileImg: '/assets/images/corporate_meeting_real.png?v=1',
      subnav: ['Staffing', 'Training', 'Recruitment', 'HR Outsourcing'],
      desc: 'Skilled and unskilled workforce solutions for industrial and technical requirements across domestic and international markets.'
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      path: '/interior-design',
      featureImg: '/assets/images/grid_office.png',
      tileImg: '/assets/images/grid_office.png',
      subnav: ['Workspace', 'Residential', 'Premium', 'Consulting'],
      desc: 'Premium interior design and workspace solutions tailored for modern business environments.'
    },
    {
      id: 'recycling',
      title: 'Recycling',
      path: '/recycling',
      featureImg: '/assets/images/sustainability.png',
      tileImg: '/assets/images/sustainability.png',
      subnav: ['Waste to Energy', 'E-Waste', 'Paper', 'Sustainable Dev'],
      desc: 'Waste-to-value solutions including plastic processing and recycled raw material production.'
    },
    {
      id: 'software-solutions',
      title: 'Software Solutions',
      path: '/software-solutions',
      featureImg: '/assets/images/join2.png',
      tileImg: '/assets/images/join2.png',
      subnav: ['Custom Dev', 'Cloud', 'Cybersecurity', 'AI Automation'],
      desc: 'Custom software, CRM/ERP systems, AI automation tools, and web/mobile app development.'
    },
    {
      id: 'aviation',
      title: 'Aviation',
      path: '/aviation',
      featureImg: '/assets/images/smart_terminals_hero.png',
      tileImg: '/assets/images/smart_terminals_hero.png',
      subnav: ['Airlines', 'Executive Jets', 'Cargo Services', 'Smart Terminals'],
      desc: 'Comprehensive aviation services including cargo, executive travel, and smart terminal management.'
    },
    {
      id: 'energy',
      title: 'Energy & Carbon Credit',
      path: '/energy',
      featureImg: '/assets/images/solar_farm_real.png?v=1',
      tileImg: '/assets/images/solar_farm_real.png?v=1',
      subnav: ['Carbon Credit', 'Solar', 'Wind', 'Green Hydrogen'],
      desc: 'Sustainable energy solutions and carbon credit management for a greener future.'
    }
  ];

  const [activeBiz, setActiveBiz] = useState(businesses[0]);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div 
          className="hero-image-bg" 
          style={{ 
            backgroundImage: `url(${heroSlides[activeHero].bg})`,
            opacity: heroOpacity,
            transform: `translateY(${heroTranslate * 0.5}px)`
          }}
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
            style={{ 
              opacity: heroOpacity,
              transform: `translateY(${heroTranslate * 0.5}px)`
            }}
          >
            <source src={heroSlides[activeHero].video} type="video/mp4" />
          </video>
        )}
        
        <div className="hero-overlay" style={{ opacity: heroOpacity }}></div>
        <div className="container hero-flex-container">
          <div 
            className={`hero-content ${isTransitioning ? 'exit' : 'enter'}`}
            style={{ opacity: heroOpacity, transform: `translateY(${heroTranslate}px)` }}
          >
            <span className="hero-category-tag">VEDANCO GROUP</span>
            <h1>Building a Global Supply Chain,<br />Technology & Infrastructure Ecosystem</h1>
            <p className="hero-description" style={{ fontSize: '1.2rem', margin: '20px 0', opacity: '0.9', maxWidth: '600px', lineHeight: '1.6' }}>
              Vedanco Group delivers integrated solutions across logistics, manpower, global trade, and technology to help businesses scale efficiently.
            </p>
            <div className="hero-btn-group">
                <Link to="/contact" className="btn-know-more">Get a Quote</Link>
                <Link to="/contact" className="btn-know-more-outline" style={{ marginLeft: '15px', padding: '12px 30px', border: '1px solid #fff', color: '#fff', textDecoration: 'none', borderRadius: '4px', display: 'inline-block' }}>Contact Us</Link>
            </div>
          </div>
        </div>

        <div 
          className="hero-slider-wrapper"
          style={{ opacity: heroOpacity, transform: `translateY(${heroTranslate}px)` }}
        >
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



      {/* Businesses Section */}
      <section className="grid-feature-section" id="businesses">
        <div className="container">
          <div className="section-header-flex reveal">
            <h2 className="section-title">CORE BUSINESS MODEL</h2>
            <p style={{ margin: '-10px 0 30px', color: 'var(--primary-green)', fontWeight: '600' }}>
              Integrated Ecosystem • Multi-Domain Growth • Strong Synergy
            </p>
          </div>

          <div className="business-layout-grid">
            <div className="small-grid-8">
              {businesses.map((biz) => (
                <div
                  key={biz.id}
                  className={`biz-tile ${activeBiz.id === biz.id ? 'active-gradient' : ''}`}
                  onClick={() => setActiveBiz(biz)}
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
                <img key={activeBiz.id} src={activeBiz.featureImg} alt={activeBiz.title} />
                <div className="feature-overlay-nav">
                  <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '10px' }}>{activeBiz.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', fontSize: '1rem', lineHeight: '1.5' }}>{activeBiz.desc}</p>
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

      {/* 1. PROBLEM STATEMENT SECTION */}
      <section className="investor-intro reveal" id="problem" style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div className="intro-card" style={{ borderLeft: '6px solid var(--primary-green)' }}>
            <span className="tag" style={{ background: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-green)', padding: '5px 15px', borderRadius: '4px', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>Challenges</span>
            <h2 style={{ fontSize: '2.8rem', margin: '20px 0', fontWeight: '800' }}>Challenges in Modern Industries</h2>
            <div className="biz-domains" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
              {[
                { icon: 'fa-network-wired', text: 'Fragmented Global Supply Chains' },
                { icon: 'fa-dollar-sign', text: 'High Logistics Cost & Inefficiency' },
                { icon: 'fa-users-slash', text: 'Lack of Reliable Manpower' },
                { icon: 'fa-dumpster', text: 'Poor Waste Management Systems' },
                { icon: 'fa-robot', text: 'Lack of Digital Systems & Automation' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}></i>
                  <span style={{ fontWeight: '600', color: '#444' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION SECTION */}
      <section className="investor-intro reveal" id="solution" style={{ background: '#f9fbf9', padding: '100px 0' }}>
        <div className="container">
          <div className="intro-card" style={{ borderLeft: '6px solid var(--primary-green)' }}>
            <span className="tag green">Innovation</span>
            <h2 style={{ fontSize: '2.8rem', margin: '20px 0', fontWeight: '800' }}>One Platform. Multiple Solutions.</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
              Vedanco provides an integrated, technology-driven ecosystem that combines logistics, manpower, trading, recycling, and software solutions into a single unified platform.
              We enable end-to-end operational control with both physical and digital infrastructure.
            </p>
            <div className="biz-domains" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { icon: 'fa-microchip', text: 'Integrated & Tech-Driven Ecosystem' },
                { icon: 'fa-link', text: 'End-to-End Supply Chain Solutions' },
                { icon: 'fa-cubes', text: 'Combined Logistics, Manpower & Trading' },
                { icon: 'fa-recycle', text: 'Waste-to-Value Recycling System' },
                { icon: 'fa-code', text: 'Custom Software & Automation Solutions' },
                { icon: 'fa-desktop', text: 'Unified Platform (Physical + Digital Control)' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: '#fff', borderRadius: '12px', border: '1px solid #eee' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}></i>
                  <span style={{ fontWeight: '600', color: '#222' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* 3.1 VEDANCO IN NUMBERS (Adani Style Impact) */}
      <section className="stats-section reveal" style={{ padding: '80px 0', background: '#0d2b1a', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)' }}>5+</h2>
              <p style={{ opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>High Growth Sectors</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)' }}>10+</h2>
              <p style={{ opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Global Markets</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)' }}>100%</h2>
              <p style={{ opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Integrated Control</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)' }}>2030</h2>
              <p style={{ opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Vision Target</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="how-it-works reveal" id="how-it-works" style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '60px' }}>How It Works</h2>
          <div className="flow-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { step: 'Requirement Submission', icon: 'fa-file-invoice' },
              { step: 'Analysis & Planning', icon: 'fa-magnifying-glass-chart' },
              { step: 'Execution', icon: 'fa-gears' },
              { step: 'Delivery & Support', icon: 'fa-handshake-angle', success: true }
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className={`flow-step ${item.success ? 'success' : ''}`} style={{ width: '220px', padding: '30px 20px' }}>
                  <i className={`fas ${item.icon}`} style={{ display: 'block', fontSize: '2rem', marginBottom: '15px' }}></i>
                  {item.step}
                </div>
                {index < 3 && <i className="fas fa-long-arrow-alt-right" style={{ color: '#ccc', fontSize: '1.5rem' }}></i>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REVENUE MODEL SECTION */}
      <section className="rev-model-section reveal" id="revenue" style={{ background: '#f9fbf9' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '60px' }}>Revenue Model</h2>
          <div className="rev-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {[
              { title: 'Global Trading', desc: 'Margin-based revenue from bulk commodity trade.', icon: 'fa-ship' },
              { title: 'Logistics Fees', desc: 'Recurring revenue from freight and warehousing.', icon: 'fa-truck-ramp-box' },
              { title: 'Manpower Solutions', desc: 'Placement and management service fees.', icon: 'fa-user-tie' },
              { title: 'Waste-to-Value', desc: 'Revenue from recycled raw material sales.', icon: 'fa-recycle' },
              { title: 'Software SaaS', desc: 'Subscription and project-based digital revenue.', icon: 'fa-laptop-code' }
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '30px', background: '#fff', borderRadius: '15px', border: '1px solid #eee', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}></i>
                <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', padding: '30px', background: 'rgba(46, 125, 50, 0.05)', borderRadius: '15px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>
              Our multi-stream revenue model ensures consistent growth through trading, logistics, manpower, recycling, and technology services.
            </p>
          </div>
        </div>
      </section>

      {/* 6. GROWTH PLAN SECTION */}
      <section className="timeline-section reveal" id="growth" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '60px' }}>Strategic Growth Plan</h2>
          <div className="timeline-track" style={{ marginTop: '0' }}>
            {[
              { phase: 'Year 1', biz: 'Trading & Recruitment', color: '#2e7d32' },
              { phase: 'Year 2–3', biz: 'Logistics & Technology', color: '#388e3c' },
              { phase: 'Year 3–5', biz: 'Recycling & Infrastructure', color: '#43a047' },
              { phase: 'Year 5+', biz: 'Aviation & Energy', color: '#4caf50' }
            ].map((step, idx) => (
              <div key={idx} className="timeline-point">
                <div className="point-circle" style={{ background: step.color }}></div>
                <div className="point-content">
                  <h5 style={{ color: step.color }}>{step.phase}</h5>
                  <h4 style={{ fontSize: '1.2rem' }}>{step.biz}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.1 OUR CORE VALUES */}
      <section className="values-section reveal" style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '60px' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Trust & Integrity', desc: 'Building long-term relationships through transparency and ethical business practices.', icon: 'fa-handshake' },
              { title: 'Innovation', desc: 'Constantly evolving with technology to provide cutting-edge solutions.', icon: 'fa-lightbulb' },
              { title: 'Safety First', desc: 'Ensuring the highest safety standards across all our physical operations.', icon: 'fa-shield-heart' },
              { title: 'Sustainability', desc: 'Committing to waste reduction and green energy for a better tomorrow.', icon: 'fa-leaf' }
            ].map((value, idx) => (
              <div key={idx} style={{ padding: '40px', background: '#fcfcfc', borderRadius: '20px', border: '1px solid #eee', textAlign: 'center' }}>
                <div style={{ width: '70px', height: '70px', background: 'rgba(46, 125, 50, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <i className={`fas ${value.icon}`} style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}></i>
                </div>
                <h4 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>{value.title}</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPETITIVE ADVANTAGE SECTION */}
      <section className="advantage-section reveal" id="advantage" style={{ padding: '100px 0', background: '#0d2b1a', color: '#fff' }}>
        <div className="container">
          <div className="adv-grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '60px', padding: '0' }}>
            <div className="adv-left">
              <span className="tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--accent-gold)', padding: '5px 15px', borderRadius: '4px', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>Why Vedanco</span>
              <h2 style={{ fontSize: '3rem', margin: '20px 0', fontWeight: '800' }}>Competitive Advantage</h2>
              <p style={{ fontSize: '1.1rem', opacity: '0.7', marginBottom: '30px' }}>We bridge physical assets with digital intelligence to create a resilient business model.</p>
            </div>
            <div className="adv-right" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', textAlign: 'left' }}>
              {[
                { icon: 'fa-layer-group', title: 'Integrated Ecosystem', desc: 'Integrated multi-domain ecosystem' },
                { icon: 'fa-link', title: 'Full Control', desc: 'End-to-end supply chain control' },
                { icon: 'fa-microchip', title: 'Tech Driven', desc: 'Technology-driven operations' },
                { icon: 'fa-chart-line', title: 'Scalable', desc: 'Scalable and cost-efficient solutions' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className={`fas ${item.icon}`} style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', marginBottom: '15px' }}></i>
                  <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', opacity: '0.7' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section className="contact-home-section reveal" id="contact" style={{ padding: '100px 0', background: '#fcfcfc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Get In Touch</h2>
              <p style={{ color: '#666', marginBottom: '30px' }}>Have a requirement or want to learn more about our ecosystem? Contact us today.</p>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <i className="fas fa-phone" style={{ color: 'var(--primary-green)' }}></i>
                  <span style={{ fontWeight: '600' }}>+91 9510774987</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <i className="fas fa-globe" style={{ color: 'var(--primary-green)' }}></i>
                  <a href="https://www.vedanco.com" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '600' }}>www.vedanco.com</a>
                </div>
              </div>
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ marginBottom: '15px', fontSize: '1rem' }}>Follow Our Growth</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="https://linkedin.com/company/vedanco" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none' }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://facebook.com/vedanco" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/vedanco" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none' }}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
              <form onSubmit={handleHomeFormSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input 
                    type="text" 
                    name="name"
                    value={homeFormData.name}
                    onChange={handleHomeFormChange}
                    placeholder="Your Name" 
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={homeFormData.email}
                    onChange={handleHomeFormChange}
                    placeholder="Your Email" 
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                    required
                  />
                </div>
                <select 
                  name="subject"
                  value={homeFormData.subject}
                  onChange={handleHomeFormChange}
                  style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                  required
                >
                  <option value="">Select Requirement</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Import–Export">Import–Export</option>
                  <option value="Manpower">Manpower</option>
                  <option value="Software Solutions">Software Solutions</option>
                  <option value="Recycling">Recycling</option>
                </select>
                <textarea 
                  name="message"
                  value={homeFormData.message}
                  onChange={handleHomeFormChange}
                  placeholder="Your Message" 
                  rows="4" 
                  style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                  required
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ padding: '15px', background: 'var(--primary-green)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && <p style={{ color: 'green', fontWeight: 'bold', margin: '0' }}>Message sent successfully!</p>}
                {submitStatus === 'error' && <p style={{ color: 'red', fontWeight: 'bold', margin: '0' }}>Failed to send message. Please try again.</p>}
              </form>
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

      {/* About Section Full-Width */}
      <section className="about-section" id="about">
        <div className="about-grid-full">
          <div className="chairman-container reveal">
            <img src="/assets/images/chairman_new.png.jpeg" alt="Chairman Portrait" className="chairman-img" />
          </div>
          <div className="about-text">
            <div className="text-content-wrapper reveal">
              <h2>About Vedanco Group</h2>
              <div className={`profile-text-collapsed ${isProfileExpanded ? 'profile-text-expanded' : ''}`} id="profile-text">
                <p>Vedanco Group is a multi-domain business ecosystem focused on global supply chain, logistics, manpower, technology, and infrastructure.</p>
                <p>Our mission is to build a unified platform that connects industries, reduces inefficiencies, and enables scalable growth across multiple markets.</p>
              </div>
              <button
                className="btn-profile"
                id="view-profile-btn"
                onClick={() => setIsProfileExpanded(!isProfileExpanded)}
              >
                {isProfileExpanded ? 'Show Vision' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
