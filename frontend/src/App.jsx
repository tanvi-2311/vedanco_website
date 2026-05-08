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
import SeaCargo from './pages/SeaCargo';
import AirCargo from './pages/AirCargo';
import GlobalTrading from './pages/GlobalTrading';
import CustomsClearance from './pages/CustomsClearance';
import Warehousing from './pages/Warehousing';
import Transport from './pages/Transport';
import SupplyChain from './pages/SupplyChain';
import LastMileDelivery from './pages/LastMileDelivery';
import AirlinesDetail from './pages/AirlinesDetail';
import ExecutiveJets from './pages/ExecutiveJets';
import SmartTerminals from './pages/SmartTerminals';
import AviationCargoServices from './pages/AviationCargoServices';
import SoftwareSolutionsDetail from './pages/SoftwareSolutionsDetail';
import CloudComputing from './pages/CloudComputing';
import ManpowerStaffing from './pages/ManpowerStaffing';
import SkillTraining from './pages/SkillTraining';
import CarbonCredits from './pages/CarbonCredits';
import SolarEnergyDetail from './pages/SolarEnergyDetail';
import WindPower from './pages/WindPower';
import WasteRecyclingDetail from './pages/WasteRecyclingDetail';
import Sustainability from './pages/Sustainability';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Investors from './pages/Investors';
import HireCoders from './pages/HireCoders';
import ITAgency from './pages/ITAgency';

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

        {/* Import-Export Details */}
        <Route path="/sea-cargo" element={<SeaCargo />} />
        <Route path="/air-cargo" element={<AirCargo />} />
        <Route path="/global-trading" element={<GlobalTrading />} />
        <Route path="/customs-clearance" element={<CustomsClearance />} />

        {/* Logistics Details */}
        <Route path="/warehousing" element={<Warehousing />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/last-mile-delivery" element={<LastMileDelivery />} />

        {/* Aviation Details */}
        <Route path="/airlines" element={<AirlinesDetail />} />
        <Route path="/executive-jets" element={<ExecutiveJets />} />
        <Route path="/smart-terminals" element={<SmartTerminals />} />
        <Route path="/aviation-cargo" element={<AviationCargoServices />} />

        {/* Digital & Manpower Details */}
        <Route path="/software-solutions-detail" element={<SoftwareSolutionsDetail />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/manpower-staffing" element={<ManpowerStaffing />} />
        <Route path="/skill-training" element={<SkillTraining />} />

        {/* Sustainability Details */}
        <Route path="/carbon-credits" element={<CarbonCredits />} />
        <Route path="/solar-energy" element={<SolarEnergyDetail />} />
        <Route path="/wind-power" element={<WindPower />} />
        <Route path="/waste-recycling" element={<WasteRecyclingDetail />} />



        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/hire-coders" element={<HireCoders />} />
        <Route path="/it-agency" element={<ITAgency />} />

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
