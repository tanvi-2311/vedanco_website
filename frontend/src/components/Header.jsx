import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [susPreview, setSusPreview] = useState({
    title: 'Powering a Sustainable Future',
    desc: 'Vedanco integrates recycling, renewable energy, and carbon strategies to drive long-term environmental and economic impact.',
    img: '/assets/images/sustainability.png'
  });

  const susItems = {
      'Advanced Waste Recycling': { desc: 'Industrial-grade reprocessing for metal and non-metal waste streams.', img: '/assets/images/sustainability.png' },
      'Plastic Waste Processing': { desc: 'Transforming post-consumer polymer waste into high-purity granules.', img: '/assets/images/grid_office.png' },
      'Granule Production': { desc: 'State-of-the-art extrusion lines for premium recycled manufacturing feedstock.', img: '/assets/images/grid_office.png' },
      'Circular Economy Solutions': { desc: 'Strategic advisory for closed-loop resource management in global industries.', img: '/assets/images/sustainability.png' },
      'Solar Energy Projects': { desc: 'Utility-scale solar farms providing clean energy to industrial grids.', img: '/assets/images/grid_solar.png' },
      'Renewable Energy Systems': { desc: 'Advanced BESS and grid-stabilization technology for consistent power.', img: '/assets/images/grid_solar.png' },
      'Clean Energy Infrastructure': { desc: 'Building the transmission and storage networks for a zero-carbon era.', img: '/assets/images/grid_solar.png' },
      'Carbon Credit Trading': { desc: 'Managing global carbon assets to offset corporate environmental footprints.', img: '/assets/images/grid_stadium.png' },
      'Emission Management': { desc: 'Digital tracking and reduction strategies for Scope 1, 2, and 3 emissions.', img: '/assets/images/grid_city.png' },
      'Sustainability Compliance': { desc: 'Ensuring operations align with global ESG standards and green regulations.', img: '/assets/images/grid_office.png' }
  };

  const handleSusHover = (name) => {
      if (susItems[name]) {
          setSusPreview({
              title: name,
              desc: susItems[name].desc,
              img: susItems[name].img
          });
      }
  };

  const resetSusHover = () => {
      setSusPreview({
          title: 'Powering a Sustainable Future',
          desc: 'Vedanco integrates recycling, renewable energy, and carbon strategies to drive long-term environmental and economic impact.',
          img: '/assets/images/sustainability.png'
      });
  };

  return (
    <>
      <div className="top-strip"></div>
      <header>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <Logo className="logo-icon-v" />
              <span className="logo-text">Vedanco</span>
            </Link>
            <nav>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li className="has-mega">
                  <Link to="/businesses">Businesses <i className="fas fa-chevron-down"></i></Link>
                  <div className="mega-menu">
                    <div className="container">
                      <div className="mega-grid">
                        <div className="mega-col">
                          <h5>Import–Export</h5>
                          <ul>
                            <li><Link to="/sea-cargo">Sea Cargo</Link></li>
                            <li><Link to="/air-cargo">Air Cargo</Link></li>
                            <li><Link to="/global-trading">Global Trading</Link></li>
                            <li><Link to="/customs-clearance">Customs Clearance</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Logistics</h5>
                          <ul>
                            <li><Link to="/warehousing">Warehousing</Link></li>
                            <li><Link to="/transport">Transport</Link></li>
                            <li><Link to="/supply-chain">Supply Chain</Link></li>
                            <li><Link to="/last-mile-delivery">Last Mile Delivery</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Aviation</h5>
                          <ul>
                            <li><Link to="/airlines">Airlines</Link></li>
                            <li><Link to="/executive-jets">Executive Jets</Link></li>
                            <li><Link to="/smart-terminals">Smart Terminals</Link></li>
                            <li><Link to="/aviation-cargo">Cargo Services</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Digital & Manpower</h5>
                          <ul>
                            <li><Link to="/software-solutions-detail">Software Solutions</Link></li>
                            <li><Link to="/cloud-computing">Cloud Computing</Link></li>
                            <li><Link to="/manpower-staffing">Manpower Staffing</Link></li>
                            <li><Link to="/skill-training">Skill Training</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Sustainability</h5>
                          <ul>
                            <li><Link to="/carbon-credits">Energy & Carbon Credit</Link></li>
                            <li><Link to="/solar-energy">Solar Energy</Link></li>
                            <li><Link to="/wind-power">Wind Power</Link></li>
                            <li><Link to="/waste-recycling">Waste Recycling</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-footer">
                        <p>Vedanco Group is a culture that encourages thinking big and taking risks. It's a can-do attitude that has been propelling us towards success across sectors. <a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-mega">
                  <Link to="/sustainability" onMouseEnter={resetSusHover}>Sustainability <i className="fas fa-chevron-down"></i></Link>
                  <div className="mega-menu mega-sustainability">
                    <div className="container">
                      <div className="mega-grid-v2">
                        <div className="mega-col-v2">
                          <div className="col-header">
                            <i className="fas fa-recycle icon-accent"></i>
                            <div>
                              <h5>Recycling & Circular Economy</h5>
                              <span className="subtitle">Waste-to-Value Systems</span>
                            </div>
                          </div>
                          <ul>
                            <li><Link to="/waste-recycling" onMouseEnter={() => handleSusHover('Advanced Waste Recycling')}>Advanced Waste Recycling</Link></li>
                            <li><Link to="/waste-recycling" onMouseEnter={() => handleSusHover('Plastic Waste Processing')}>Plastic Waste Processing</Link></li>
                            <li><Link to="/waste-recycling" onMouseEnter={() => handleSusHover('Granule Production')}>Granule Production</Link></li>
                            <li><Link to="/waste-recycling" onMouseEnter={() => handleSusHover('Circular Economy Solutions')}>Circular Economy Solutions</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col-v2">
                          <div className="col-header">
                            <i className="fas fa-bolt icon-accent"></i>
                            <div>
                              <h5>Renewable Energy</h5>
                              <span className="subtitle">Sustainable Power Solutions</span>
                            </div>
                          </div>
                          <ul>
                            <li><Link to="/solar-energy" onMouseEnter={() => handleSusHover('Solar Energy Projects')}>Solar Energy Projects</Link></li>
                            <li><Link to="/wind-power" onMouseEnter={() => handleSusHover('Renewable Energy Systems')}>Renewable Energy Systems</Link></li>
                            <li><Link to="/carbon-credits" onMouseEnter={() => handleSusHover('Clean Energy Infrastructure')}>Clean Energy Infrastructure</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col-v2">
                          <div className="col-header">
                            <i className="fas fa-leaf icon-accent"></i>
                            <div>
                              <h5>Carbon & Climate Strategy</h5>
                              <span className="subtitle">Emission Reduction & Green Growth</span>
                            </div>
                          </div>
                          <ul>
                            <li><Link to="/carbon-credits" onMouseEnter={() => handleSusHover('Carbon Credit Trading')}>Carbon Credit Trading</Link></li>
                            <li><Link to="/carbon-credits" onMouseEnter={() => handleSusHover('Emission Management')}>Emission Management</Link></li>
                            <li><Link to="/sustainability" onMouseEnter={() => handleSusHover('Sustainability Compliance')}>Sustainability Compliance</Link></li>
                          </ul>
                        </div>
                        <div className="mega-feature-panel">
                          <div className="feature-inner">
                            <h4>{susPreview.title}</h4>
                            <p>{susPreview.desc}</p>
                            <Link to="/sustainability" className="btn-feature">Explore Sustainability</Link>
                          </div>
                        </div>
                      </div>
                      <div className="mega-footer-v2">
                        <span className="trust-line">“Driving Sustainable Growth Across Industries”</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li><Link to="/foundation">Vedanco Foundation</Link></li>
                <li><Link to="/investors">Investors</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
