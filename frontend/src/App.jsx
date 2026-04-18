import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aviation from './pages/Aviation';
import Businesses from './pages/Businesses';
import Energy from './pages/Energy';
import ImportExport from './pages/ImportExport';
import InteriorDesign from './pages/InteriorDesign';
import Logistics from './pages/Logistics';
import Manpower from './pages/Manpower';
import Recycling from './pages/Recycling';
import SoftwareSolutions from './pages/SoftwareSolutions';
import About from './pages/About';
import Foundation from './pages/Foundation';
import Sustainability from './pages/Sustainability';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Investors from './pages/Investors';

import './index.css'; // Global styles

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
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

    const observeElements = () => {
        const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
        revealElements.forEach(el => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe when DOM changes (for dynamic content)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
        observer.disconnect();
        mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foundation" element={<Foundation />} />
        
        {/* Clean Routes */}
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/import-export" element={<ImportExport />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/manpower" element={<Manpower />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/software-solutions" element={<SoftwareSolutions />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/investors" element={<Investors />} />

        {/* .html Redirects for backward compatibility */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/foundation.html" element={<Navigate to="/foundation" replace />} />
        <Route path="/aviation.html" element={<Navigate to="/aviation" replace />} />
        <Route path="/businesses.html" element={<Navigate to="/businesses" replace />} />
        <Route path="/energy.html" element={<Navigate to="/energy" replace />} />
        <Route path="/import-export.html" element={<Navigate to="/import-export" replace />} />
        <Route path="/interior-design.html" element={<Navigate to="/interior-design" replace />} />
        <Route path="/logistics.html" element={<Navigate to="/logistics" replace />} />
        <Route path="/manpower.html" element={<Navigate to="/manpower" replace />} />
        <Route path="/recycling.html" element={<Navigate to="/recycling" replace />} />
        <Route path="/software-solutions.html" element={<Navigate to="/software-solutions" replace />} />
        <Route path="/sustainability.html" element={<Navigate to="/sustainability" replace />} />
        <Route path="/services.html" element={<Navigate to="/services" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/investors.html" element={<Navigate to="/investors" replace />} />
        
        {/* Catch-all to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
