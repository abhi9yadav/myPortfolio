// src/components/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = ({ currentTheme }) => {
  return (
    <footer
      className={`
        ${currentTheme.footerBg} py-10 text-center ${currentTheme.footerText} text-sm border-t ${currentTheme.footerBorder} 
        relative overflow-hidden footer-animated-border
      `}
    >
      {/* Animated background shimmer */}
      <div className="footer-shimmer"></div>

      {/* Main text */}
      <p className="relative z-10 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Abhinav Yadav. All rights reserved.
        <span className="text-cyan-400"> // Digital Construct v2.0</span>
      </p>
    </footer>
  );
};

export default Footer;
