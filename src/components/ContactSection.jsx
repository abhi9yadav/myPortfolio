// src/components/ContactSection.jsx
import React from 'react';
import { Mail, Github, Linkedin, Globe, Sparkles } from 'lucide-react';

const ContactSection = ({ sectionRef, isVisible, currentTheme, handleMouseEnterInteractive, handleMouseLeaveInteractive }) => {
  return (
    <section id="contact" ref={sectionRef} className={`relative overflow-hidden ${currentTheme.contactSectionBg} py-24 px-6 ${currentTheme.textDefault} border-t ${currentTheme.navBorder}`}>
      
      {/* Advanced Ambient Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/30 border border-slate-700/50 backdrop-blur-md mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Sparkles size={16} className="text-emerald-400 animate-pulse" />
          <span className="text-sm font-mono text-slate-300 tracking-widest uppercase">Status: Open to Collaborate</span>
        </div>

        <h2 className={`mb-6 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.headingGradientFromSecondary} ${currentTheme.headingGradientToSecondary} drop-shadow-xl hover:scale-[1.02] transition-transform duration-500`}>
          Initiate Communication
        </h2>
        
        <p className={`mb-14 text-xl md:text-2xl font-light max-w-2xl mx-auto ${currentTheme.textSubtle} leading-relaxed`}>
          Whether you want to build scalable MERN architectures, explore AI agentic workflows, or just discuss the future of tech—my data channels are open.
        </p>
        
        {/* Advanced Glowing Button */}
        <div className="relative inline-block group">
          {/* Animated background blur for glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${currentTheme.buttonSecondaryBgFrom} ${currentTheme.buttonSecondaryBgTo} rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
          
          <a
            href="mailto:abhinav854@gmail.com"
            onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorContact)}
            onMouseLeave={handleMouseLeaveInteractive}
            className={`relative flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r ${currentTheme.buttonSecondaryBgFrom} ${currentTheme.buttonSecondaryBgTo} ${currentTheme.buttonSecondaryText} shadow-xl
                       ${currentTheme.buttonSecondaryHoverBgFrom} ${currentTheme.buttonSecondaryHoverBgTo} transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 interactive-element overflow-hidden`}
          >
            {/* Button inner shine */}
            <div className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-full"></div>
            <span className="relative z-10 tracking-wide">Transmit Signal!</span> 
            <Mail size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300"/>
          </a>
        </div>

        {/* Glassmorphic Social Links */}
        <div className="mt-20 flex justify-center gap-6 sm:gap-10 flex-wrap">
          <a
            href="https://github.com/abhi9yadav"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorLink)}
            onMouseLeave={handleMouseLeaveInteractive}
            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 shadow-lg hover:border-slate-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] interactive-element"
          >
            <Github size={32} className={`text-slate-400 group-hover:text-white transition-colors duration-300 sm:w-10 sm:h-10`} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/abhinav-yadav-724b76291"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorProject)}
            onMouseLeave={handleMouseLeaveInteractive}
            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-900/10 backdrop-blur-xl border border-blue-800/30 shadow-lg hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] interactive-element"
          >
            <Linkedin size={32} className={`text-blue-500 group-hover:text-blue-400 transition-colors duration-300 sm:w-10 sm:h-10`} />
          </a>
          
          <a
            href="https://shop-circuit.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorSkill)}
            onMouseLeave={handleMouseLeaveInteractive}
            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-900/10 backdrop-blur-xl border border-emerald-800/30 shadow-lg hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] interactive-element"
          >
            <Globe size={32} className={`text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300 sm:w-10 sm:h-10 group-hover:animate-spin-slow`} />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;