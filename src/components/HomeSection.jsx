// src/components/HomeSection.jsx
import React from 'react';
import { Rocket, Terminal, Code2, Cpu } from 'lucide-react';

const HomeSection = ({ sectionRef, isVisible, currentTheme, scrollToSection, handleMouseEnterInteractive, handleMouseLeaveInteractive, useParticles }) => {
  const canvasRef = useParticles();

  return (
    <section id="home" ref={sectionRef} className={`relative flex min-h-screen items-center justify-center ${currentTheme.homeSectionBg} ${currentTheme.textDefault} p-6 md:p-12 overflow-hidden border-b ${currentTheme.navBorder}`}>
      <img
        src="/ChatGPT%20Image%20Sep%2015,%202026,%2010_05_09%20PM.png"
        alt="Abhinav Yadav working on software projects"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/75"></div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40"></canvas>

      {/* Expanded Animated Background Orbs for better atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-600 rounded-full mix-blend-screen filter blur-[90px] opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Main Content Container with Fade-in-Up transition */}
      <div className={`max-w-5xl text-center relative z-10 flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Animated Floating Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
           <span className={`flex items-center gap-2 px-4 py-2 rounded-full border ${currentTheme.navBorder} bg-black/20 backdrop-blur-sm animate-bounce`} style={{ animationDuration: '3s' }}>
              <Terminal size={16} className="text-emerald-400" />
              <span className={`text-sm font-mono ${currentTheme.textSubtle}`}>800+ DSA Solved</span>
           </span>
           <span className={`flex items-center gap-2 px-4 py-2 rounded-full border ${currentTheme.navBorder} bg-black/20 backdrop-blur-sm animate-bounce`} style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <Code2 size={16} className="text-blue-400" />
              <span className={`text-sm font-mono ${currentTheme.textSubtle}`}>MERN Stack</span>
           </span>
           <span className={`flex items-center gap-2 px-4 py-2 rounded-full border ${currentTheme.navBorder} bg-black/20 backdrop-blur-sm animate-bounce`} style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
              <Cpu size={16} className="text-purple-400" />
              <span className={`text-sm font-mono ${currentTheme.textSubtle}`}>AI Agents & RAG</span>
           </span>
        </div>

        <h2 className={`text-xl md:text-2xl font-mono tracking-widest mb-4 ${currentTheme.primaryAccentTextSubtle}`}>
          HELLO, WORLD. I AM
        </h2>

        {/* Hover-scaling Hero Text */}
        <h1 className={`mb-8 text-6xl md:text-8xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.headingGradientFrom} ${currentTheme.headingGradientTo} drop-shadow-2xl hover:scale-105 transition-transform duration-500`}>
          Abhinav Yadav
        </h1>
        
        <p className={`mb-12 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto ${currentTheme.textSubtle}`}>
          Computer Science Engineering Student at <span className={`${currentTheme.primaryAccentTextSubtle} font-medium`}>MNNIT Allahabad</span>. I architect intelligent web applications by fusing full-stack development with advanced AI integrations.
        </p>
        
        {/* Highly Interactive Button */}
        <button
          onClick={() => scrollToSection('projects')}
          onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorProject)}
          onMouseLeave={handleMouseLeaveInteractive}
          className={`relative px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r ${currentTheme.buttonPrimaryBgFrom} ${currentTheme.buttonPrimaryBgTo} ${currentTheme.buttonPrimaryText} shadow-xl
                       ${currentTheme.buttonPrimaryHoverBgFrom} ${currentTheme.buttonPrimaryHoverBgTo} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 interactive-element group overflow-hidden`}
        >
          {/* Button overlay for hover shine effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          
          <span className="relative z-10 flex items-center">
            Explore My Work 
            <Rocket size={20} className="inline-block ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"/>
          </span>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;