// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutzerkl from './pages/Datenschutzerkl';
import CookieConsent from './components/CookieConsent';
import { initGA, logPageView } from './utils/analytics';

function App() {
  const location = useLocation();
  const [gaInitialized, setGaInitialized] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true' && !gaInitialized) {
      initGA();
      setGaInitialized(true);
    }
  }, [gaInitialized]);

  useEffect(() => {
    if (gaInitialized) {
      logPageView();
    }
  }, [location, gaInitialized]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    if (!gaInitialized) {
      initGA();
      setGaInitialized(true);
      logPageView();
    }
  };

  return (
    <div>
      <Navbar />
      <div className='px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meine-arbeit" element={<MyWork />} />
          <Route path="/ueber-mich" element={<AboutMe />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutzerkl />} />
        </Routes>
      </div>
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsent onAccept={handleAcceptCookies} />
    </div>
  );
}

export default App;
