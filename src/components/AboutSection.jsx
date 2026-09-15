// src/components/AboutSection.jsx
import React, { useState, useEffect } from 'react';
import { Terminal, Target, Code2 } from 'lucide-react';

const AboutSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showHighlights, setShowHighlights] = useState(false);

  // Aapka pura content jise robot type karega
  const fullText = `Hi, I'm Abhinav Yadav, a Computer Science Engineering student (Batch of 2027) at MNNIT Allahabad. My journey in tech is driven by a desire to build robust systems that solve real-world problems.

I specialize in full-stack development using the MERN stack and have a deep passion for competitive programming, having successfully solved over 400 Data Structures and Algorithms problems. Recently, I've been diving deep into advanced artificial intelligence, building applications powered by agentic workflows, RAG, and vector databases.

Beyond writing code, I am highly interested in using digital solutions for social impact. I actively monitor the Indian stock market, unwind by watching intense sci-fi, action, and drama series`;

  // Typewriter Effect Logic
  useEffect(() => {
    let index = 0;
    const typingSpeed = 50; // Speed in milliseconds per character

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Text type hone ke thodi der baad highlights fade-in honge
        setTimeout(() => setShowHighlights(true), 500); 
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section id="about" className="container mx-auto my-20 px-6 py-16 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        About My Core Logic
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        
        {/* Left Side: Animated SVG Robot Typing on Laptop */}
        <div className="lg:w-1/3 flex justify-center relative group">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          
          <svg width="250" height="250" viewBox="0 0 200 200" className="relative z-10 drop-shadow-2xl">
            {/* Table/Desk */}
            <rect x="20" y="170" width="160" height="5" rx="2" fill="#334155" />
            
            {/* Robot Body */}
            <rect x="70" y="110" width="60" height="60" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            
            {/* Robot Head (Bobs up and down slightly) */}
            <g style={{ animation: 'bounce 3s infinite ease-in-out' }}>
              <rect x="65" y="40" width="70" height="60" rx="15" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
              {/* Antenna */}
              <line x1="100" y1="40" x2="100" y2="20" stroke="#3b82f6" strokeWidth="3" />
              <circle cx="100" cy="15" r="5" fill="#10b981" className="animate-pulse" />
              {/* Eyes */}
              <rect x="75" y="60" width="15" height="10" rx="3" fill="#10b981" className="animate-pulse" />
              <rect x="110" y="60" width="15" height="10" rx="3" fill="#10b981" className="animate-pulse" />
              {/* Mouth */}
              <line x1="85" y1="85" x2="115" y2="85" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Laptop Back */}
            <polygon points="50,170 150,170 135,120 65,120" fill="#475569" />
            {/* Glowing Apple/Logo on Laptop */}
            <circle cx="100" cy="145" r="6" fill="#60a5fa" className="animate-pulse" />

            {/* Left Hand Typing (Fast animation) */}
            <g style={{ animation: isTyping ? 'bounce 0.15s infinite alternate' : 'none' }}>
              <rect x="45" y="130" width="15" height="40" rx="5" fill="#3b82f6" transform="rotate(-30 45 130)" />
            </g>
            
            {/* Right Hand Typing (Fast animation with delay) */}
            <g style={{ animation: isTyping ? 'bounce 0.18s infinite alternate-reverse' : 'none' }}>
              <rect x="140" y="130" width="15" height="40" rx="5" fill="#3b82f6" transform="rotate(30 140 130)" />
            </g>
          </svg>
        </div>
        
        {/* Right Side: Terminal / Editor Window */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-slate-950 rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
            
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs font-mono text-slate-400">~/abhinav/about.txt</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8 text-slate-300 font-mono text-sm md:text-base leading-relaxed h-[350px] overflow-y-auto">
              <div className="whitespace-pre-wrap">
                <span className="text-emerald-400">user@mnnit</span>
                <span className="text-slate-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-400">$ cat about.txt</span>
                <br /><br />
                {displayedText}
                {/* Blinking Cursor */}
                <span className={`inline-block w-2.5 h-5 ml-1 bg-blue-400 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </div>
            </div>
          </div>

          {/* Quick Highlights - Fades in after typing completes */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 transition-all duration-1000 transform ${showHighlights ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <Code2 className="text-blue-400" size={24} />
              <span className="text-sm font-medium text-slate-200">MERN Stack & C++</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <Terminal className="text-emerald-400" size={24} />
              <span className="text-sm font-medium text-slate-200">800+ DSA Solved</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <Target className="text-purple-400" size={24} />
              <span className="text-sm font-medium text-slate-200">Learning - AI & Agentic Systems</span>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Required CSS for Robot animation (Added directly into component style to avoid external CSS) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}} />
    </section>
  );
};

export default AboutSection;