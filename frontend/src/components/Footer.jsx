import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo footer-logo-override">
              <Logo className="logo-icon-v" />
              <span className="logo-text">Vedanco</span>
            </div>
            <p>Building a Global Supply Chain, Technology & Infrastructure Ecosystem.</p>
            <div className="social-icons">
              <a href="https://linkedin.com/company/vedanco" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://facebook.com/vedanco" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://youtube.com/@vedanco" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/foundation">Foundation</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/logistics">Logistics</Link></li>
              <li><Link to="/import-export">Import Export</Link></li>
              <li><Link to="/manpower">Manpower</Link></li>
              <li><Link to="/software-solutions">Software</Link></li>
              <li><Link to="/recycling">Recycling</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/energy">Energy</Link></li>
              <li><Link to="/aviation">Aviation</Link></li>
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
