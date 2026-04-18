import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">Vedan<span className="logo-v">CO</span></div>
            <p>Building world-class infrastructure and empowering lives through sustainable development.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>About Us</h5>
            <ul>
              <li><Link to="/about">Our Vision</Link></li>
              <li><Link to="/about">Leadership</Link></li>
              <li><Link to="/about">How We Work</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Sustainability</h5>
            <ul>
              <li><Link to="/energy">Green Energy</Link></li>
              <li><Link to="/recycling">Waste Management</Link></li>
              <li><Link to="/foundation">Vedanco Foundation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Vedanco Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
