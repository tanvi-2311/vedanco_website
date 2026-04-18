import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="top-strip"></div>
      <header>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <div className="logo-icon-v">V</div>
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
                <li><a href="#sustainability">Sustainability</a></li>
                <li><Link to="/foundation">Vedanco Foundation</Link></li>
                <li><a href="#investors">Investors</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
