import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="top-strip"></div>
      <header>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">Vedan<span className="logo-v">CO</span></Link>
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
                            <li><Link to="/import-export">Sea Cargo</Link></li>
                            <li><Link to="/import-export">Air Cargo</Link></li>
                            <li><Link to="/import-export">Global Trading</Link></li>
                            <li><Link to="/import-export">Customs Clearance</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Logistics</h5>
                          <ul>
                            <li><Link to="/logistics">Warehousing</Link></li>
                            <li><Link to="/logistics">Transport</Link></li>
                            <li><Link to="/logistics">Supply Chain</Link></li>
                            <li><Link to="/logistics">Last Mile Delivery</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Aviation</h5>
                          <ul>
                            <li><Link to="/aviation">Airlines</Link></li>
                            <li><Link to="/aviation">Executive Jets</Link></li>
                            <li><Link to="/aviation">Smart Terminals</Link></li>
                            <li><Link to="/aviation">Cargo Services</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Digital & Manpower</h5>
                          <ul>
                            <li><Link to="/software-solutions">Software Solutions</Link></li>
                            <li><Link to="/software-solutions">Cloud Computing</Link></li>
                            <li><Link to="/manpower">Manpower Staffing</Link></li>
                            <li><Link to="/manpower">Skill Training</Link></li>
                          </ul>
                        </div>
                        <div className="mega-col">
                          <h5>Sustainability</h5>
                          <ul>
                            <li><Link to="/energy">Energy & Carbon Credit</Link></li>
                            <li><Link to="/energy">Solar Energy</Link></li>
                            <li><Link to="/energy">Wind Power</Link></li>
                            <li><Link to="/recycling">Waste Recycling</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-footer">
                        <p>Vedanco Group is a culture that encourages thinking big and taking risks. It's a can-do attitude that has been propelling us towards success across sectors. <a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li><Link to="/sustainability">Sustainability</Link></li>
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
