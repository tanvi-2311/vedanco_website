import React from 'react';

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
              <li><a href="#">Our Heritage</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Governance</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Sustainability</h5>
            <ul>
              <li><a href="#">Green Energy</a></li>
              <li><a href="#">Water Management</a></li>
              <li><a href="#">CSR Projects</a></li>
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
