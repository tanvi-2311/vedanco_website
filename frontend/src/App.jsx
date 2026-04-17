import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

import './index.css'; // Global styles

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
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

        {/* .html Redirects for backward compatibility */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/aviation.html" element={<Navigate to="/aviation" replace />} />
        <Route path="/businesses.html" element={<Navigate to="/businesses" replace />} />
        <Route path="/energy.html" element={<Navigate to="/energy" replace />} />
        <Route path="/import-export.html" element={<Navigate to="/import-export" replace />} />
        <Route path="/interior-design.html" element={<Navigate to="/interior-design" replace />} />
        <Route path="/logistics.html" element={<Navigate to="/logistics" replace />} />
        <Route path="/manpower.html" element={<Navigate to="/manpower" replace />} />
        <Route path="/recycling.html" element={<Navigate to="/recycling" replace />} />
        <Route path="/software-solutions.html" element={<Navigate to="/software-solutions" replace />} />
        
        {/* Catch-all to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
