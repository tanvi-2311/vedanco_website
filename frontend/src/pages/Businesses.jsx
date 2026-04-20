import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const businessesData = [
    {
        id: 'import-export',
        name: 'Import–Export',
        image: 'assets/images/hero.png',
        description: 'Global trading facilitators bridging international markets with precision cargo solutions and strategic partnership networks.',
        path: '/import-export',
        tags: ['Global Trade', 'Strategic Sourcing', 'Market Access']
    },
    {
        id: 'logistics',
        name: 'Logistics',
        image: 'assets/images/pill_logistics.png',
        description: 'End-to-end supply chain management with advanced warehousing, multimodal transport, and real-time distribution tracking.',
        path: '/logistics',
        tags: ['Warehousing', 'Distribution', 'Supply Chain']
    },
    {
        id: 'manpower',
        name: 'Manpower',
        image: 'assets/images/join1.png',
        description: 'Providing skilled human capital and specialized staffing solutions for global organizations across diverse industry sectors.',
        path: '/manpower',
        tags: ['Staffing', 'Human Capital', 'Recruitment']
    },
    {
        id: 'interior-design',
        name: 'Interior Design',
        image: 'assets/images/grid_office.png',
        description: 'Creating workspaces that inspire productivity and innovative architectural environments tailored to corporate excellence.',
        path: '/interior-design',
        tags: ['Architecture', 'Workspace', 'Modern Design']
    },
    {
        id: 'recycling',
        name: 'Recycling',
        image: 'assets/images/sustainability.png',
        description: 'Driving sustainability through advanced circular economy initiatives, waste management, and resource recovery programs.',
        path: '/recycling',
        tags: ['Waste Management', 'Circular Economy', 'Green Tech']
    },
    {
        id: 'software-solutions',
        name: 'Software Solutions',
        image: 'assets/images/join2.png',
        description: 'Digital transformation through custom software engineering, AI-driven analytics, and scalable cloud automation systems.',
        path: '/software-solutions',
        tags: ['AI & ML', 'Cloud Systems', 'Digital Transformation']
    },
    {
        id: 'aviation',
        name: 'Aviation',
        image: '/assets/images/smart_terminals_hero.png',
        description: 'High-tier airport management, executive jets services, and specialized aviation infrastructure for global mobility.',
        path: '/aviation',
        tags: ['Airports', 'Private Jets', 'Ground Handling']
    },
    {
        id: 'energy',
        name: 'Energy & Carbon Credits',
        image: '/assets/images/grid_solar.png',
        description: 'Powering tomorrow with clean renewable energy and global carbon asset management to achieve net-zero milestones.',
        path: '/energy',
        tags: ['Renewables', 'Solar', 'Carbon Markets']
    }
];

const Businesses = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeBiz, setActiveBiz] = useState(businessesData[0]);
    const [hoveredBiz, setHoveredBiz] = useState(null);

    // The display business is either the one being hovered or the one that was last clicked
    const currentDisplayBiz = hoveredBiz || activeBiz;

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

                <section className="grid-feature-section reveal">
                    <div className="container">
                        <div className="section-header-flex">
                            <h2 className="section-title">BUSINESSES</h2>
                            <div className="business-tabs">
                                <div className="tab-item active">Verticals</div>
                                <div className="tab-item">Listed Companies</div>
                            </div>
                        </div>

                        <div className="business-layout-grid">
                            <div className="small-grid-8">
                                {businessesData.map((biz) => (
                                    <div 
                                        key={biz.id} 
                                        className={`biz-tile ${activeBiz.id === biz.id ? 'active-gradient' : ''}`}
                                        onClick={() => setActiveBiz(biz)}
                                        onMouseEnter={() => setHoveredBiz(biz)}
                                        onMouseLeave={() => setHoveredBiz(null)}
                                    >
                                        <img src={biz.image} alt={biz.name} />
                                        <div className="biz-label">{biz.name}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="featured-biz-area">
                                <div className="main-feature-img">
                                    {/* Using a key that combines both state and hovering ensures animation triggers smoothly */}
                                    <img 
                                        src={currentDisplayBiz.image} 
                                        alt={currentDisplayBiz.name} 
                                        key={currentDisplayBiz.id} 
                                    />
                                    <div className="feature-overlay-nav">
                                        <ul className="feature-subnav">
                                            {currentDisplayBiz.tags.map((tag, idx) => (
                                                <li key={idx} className={idx === 0 ? 'active' : ''}>{tag}</li>
                                            ))}
                                        </ul>
                                        <div className="explore-line"></div>
                                        <Link to={currentDisplayBiz.path} className="explore-link">Explore More</Link>
                                    </div>
                                </div>
                            </div>
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
