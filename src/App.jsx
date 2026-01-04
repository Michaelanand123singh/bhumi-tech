import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Results from './pages/Results';
import Contact from './pages/Contact';
import usePageTracking from './hooks/usePageTracking';
import { initGA, verifyGA } from './utils/analytics';
import './App.css';

function App() {
  // Initialize Google Analytics on app load
  useEffect(() => {
    // Wait a bit for gtag script to load, then initialize
    const timer = setTimeout(() => {
      initGA().then(() => {
        // Verify GA is working (only in development)
        if (process.env.NODE_ENV === 'development') {
          verifyGA();
        }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Separate component to use hooks inside Router
function AppContent() {
  // Track page views on route changes
  usePageTracking();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
