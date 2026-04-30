import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 'businesses' or 'sustainability'
  
  const [susPreview, setSusPreview] = useState({
    title: 'Powering a Sustainable Future',
    desc: 'Vedanco integrates recycling, renewable energy, and carbon strategies to drive long-term environmental and economic impact.',
    img: '/assets/images/sustainability.png'
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubMenu(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (e, name) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveSubMenu(activeSubMenu === name ? null : name);
    }
  };

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
            <Link to="/" className="logo" onClick={closeMenu}>
              <Logo className="logo-icon-v" />
              <span className="logo-text">Vedanco</span>
            </Link>

            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            <nav className={isMenuOpen ? 'active' : ''}>
              <ul>
                <li onClick={closeMenu}><Link to="/about">About Us</Link></li>
                
                <li className={`has-mega ${activeSubMenu === 'businesses' ? 'mobile-open' : ''}`}>
                  <Link to="/businesses" onClick={(e) => toggleSubMenu(e, 'businesses')}>
                    Businesses <i className="fas fa-chevron-down"></i>
                  </Link>
                  <div className="mega-menu">
                    <div className="container">
                      <div className="mega-grid">
                        <div className="mega-col">
                          <h5>Import–Export</h5>
                          <ul>
                            <li><Link to="/sea-cargo" onClick={closeMenu}>Sea Cargo</Link></li>
                            <li><Link to="/air-cargo" onClick={closeMenu}>Air Cargo</Link></li>
                            <li><Link to="/global-trading" onClick={closeMenu}>Global Trading</Link></li>
                            <li><Link to="/customs-clearance" onClick={closeMenu}>Customs Clearance</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Logistics</h5>
                          <ul>
                            <li><Link to="/warehousing" onClick={closeMenu}>Warehousing</Link></li>
                            <li><Link to="/transport" onClick={closeMenu}>Transport</Link></li>
                            <li><Link to="/supply-chain" onClick={closeMenu}>Supply Chain</Link></li>
                            <li><Link to="/last-mile-delivery" onClick={closeMenu}>Last Mile Delivery</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Aviation</h5>
                          <ul>
                            <li><Link to="/airlines" onClick={closeMenu}>Airlines</Link></li>
                            <li><Link to="/executive-jets" onClick={closeMenu}>Executive Jets</Link></li>
                            <li><Link to="/smart-terminals" onClick={closeMenu}>Smart Terminals</Link></li>
                            <li><Link to="/aviation-cargo" onClick={closeMenu}>Cargo Services</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Digital & Manpower</h5>
                          <ul>
                            <li><Link to="/software-solutions-detail" onClick={closeMenu}>Software Solutions</Link></li>
                            <li><Link to="/cloud-computing" onClick={closeMenu}>Cloud Computing</Link></li>
                            <li><Link to="/manpower-staffing" onClick={closeMenu}>Manpower Staffing</Link></li>
                            <li><Link to="/skill-training" onClick={closeMenu}>Skill Training</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Sustainability</h5>
                          <ul>
                            <li><Link to="/carbon-credits" onClick={closeMenu}>Energy & Carbon Credit</Link></li>
                            <li><Link to="/solar-energy" onClick={closeMenu}>Solar Energy</Link></li>
                            <li><Link to="/wind-power" onClick={closeMenu}>Wind Power</Link></li>
                            <li><Link to="/waste-recycling" onClick={closeMenu}>Waste Recycling</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`has-mega ${activeSubMenu === 'sustainability' ? 'mobile-open' : ''}`}>
                  <Link to="/sustainability" onClick={(e) => toggleSubMenu(e, 'sustainability')} onMouseEnter={resetSusHover}>
                    Sustainability <i className="fas fa-chevron-down"></i>
                  </Link>
                  <div className="mega-menu mega-sustainability">
                    <div className="container">
                      <div className="mega-grid-v2">
                        <div className="mega-col-v2">
                          <h5>Recycling</h5>
                          <ul>
                            <li><Link to="/waste-recycling" onClick={closeMenu}>Advanced Waste Recycling</Link></li>
                            <li><Link to="/waste-recycling" onClick={closeMenu}>Plastic Processing</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col-v2">
                          <h5>Energy</h5>
                          <ul>
                            <li><Link to="/solar-energy" onClick={closeMenu}>Solar Projects</Link></li>
                            <li><Link to="/wind-power" onClick={closeMenu}>Wind Power</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li onClick={closeMenu}><Link to="/foundation">Vedanco Foundation</Link></li>
                <li onClick={closeMenu}><Link to="/investors">Investors</Link></li>
                <li onClick={closeMenu}><Link to="/services">Services</Link></li>
                <li onClick={closeMenu}><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
