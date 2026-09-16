// src/components/Footer.jsx
import React from 'react';
import { Heart, Code2, Coffee } from 'lucide-react';
import './footer.css';

const Footer = ({ currentTheme }) => {
  return (
    <footer
      className={`
        ${currentTheme.footerBg} py-12 text-center ${currentTheme.footerText} text-sm border-t ${currentTheme.footerBorder} 
        relative overflow-hidden footer-animated-border
      `}
    >
      {/* Animated background shimmer */}
      <div className="footer-shimmer"></div>

      {/* Main content */}
      <div className="relative z-10 space-y-4">
        {/* Made with love */}
        <div className="flex items-center justify-center gap-2 text-slate-400">
          <span>Crafted with</span>
          <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
          <span>and lots of</span>
          <Coffee size={16} className="text-amber-500" />
          <span>by</span>
          <Code2 size={16} className="text-blue-400" />
        </div>

        {/* Main text */}
        <p className="tracking-widest uppercase text-slate-300">
          &copy; {new Date().getFullYear()} Abhinav Yadav. All rights reserved.
        </p>

        {/* Tech stack badge */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
            React.js
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            Vite
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
            Tailwind CSS
          </span>
        </div>

        {/* Quick stats */}
        <div className="text-xs text-slate-500 space-x-4">
          <span>🎓 MNNIT Allahabad</span>
          <span>•</span>
          <span>💻 800+ Problems Solved</span>
          <span>•</span>
          <span>🚀 Full Stack Developer</span>
        </div>

        {/* Version */}
        <p className="text-xs text-slate-600 font-mono">
          Portfolio v2.0 // Last Updated: {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
