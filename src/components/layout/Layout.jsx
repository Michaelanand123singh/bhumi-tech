import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import WhatsAppButton from '../common/WhatsAppButton';

/**
 * Layout Component
 * 
 * This is the main layout wrapper for all pages in the application.
 * It provides a consistent structure with:
 * - Navbar at the top
 * - Main content area (children)
 * - Footer at the bottom
 * - WhatsApp floating button
 * 
 * The layout ensures full-width design with proper spacing and responsive behavior.
 * 
 * @param {React.ReactNode} children - The page content to be rendered
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Navigation Bar - Full width at top */}
      <Navbar />
      
      {/* Main Content Area - Flexible, takes remaining space */}
      <main className="grow w-full">
        {children}
      </main>
      
      {/* Footer - Full width at bottom */}
      <Footer />
      
      {/* WhatsApp Floating Button - Fixed position */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

