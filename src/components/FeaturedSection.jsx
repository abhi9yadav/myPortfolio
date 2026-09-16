// src/components/FeaturedSection.jsx
import React from 'react';
import { Sparkles, Code2, Trophy, Lightbulb } from 'lucide-react';
import bannerImage from '../assets/banner.png';

const FeaturedSection = ({ sectionRef, isVisible, currentTheme, handleMouseEnterInteractive, handleMouseLeaveInteractive }) => {
  const highlights = [
    { icon: Code2, label: 'MERN Stack Developer', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { icon: Trophy, label: '800+ Problems Solved', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { icon: Lightbulb, label: 'AI & RAG Systems', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' }
  ];

  return (
    <section
      id="featured"
      ref={sectionRef}
      className={`relative overflow-hidden py-20 px-6 ${currentTheme?.textDefault || 'text-slate-200'} border-y ${currentTheme?.navBorder || 'border-slate-800'}`}
      style={{ backgroundColor: '#0a0e1a' }}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`container mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 mb-4">
            <Sparkles size={16} className="text-blue-400 animate-pulse" />
            <span className="text-sm font-mono uppercase tracking-widest text-blue-400">Featured Workspace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Where The Magic Happens
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A glimpse into my creative space where ideas transform into code and solutions come to life
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Image Section - Takes 3 columns */}
          <div className="lg:col-span-3 relative group">
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/50 group-hover:border-slate-500 transition-all duration-500 shadow-2xl">
              <img
                src={bannerImage}
                alt="Abhinav Yadav - Developer Workspace showcasing projects, coding setup, and development environment"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  console.log('Image failed to load, trying public path');
                  e.target.src = '/banner.png';
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-lg mb-2">My Development Environment</p>
                <p className="text-slate-300 text-sm">Where MERN stack meets AI innovation, surrounded by code, coffee, and creativity ☕💻</p>
              </div>
            </div>

            {/* Floating Stats Badges on Image */}
            <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              <div className="px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-emerald-500/50 text-emerald-400 text-sm font-mono shadow-lg">
                <span className="font-bold">2011</span> LeetCode Peak
              </div>
              <div className="px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-blue-500/50 text-blue-400 text-sm font-mono shadow-lg">
                <span className="font-bold">1209</span> Codeforces Peak
              </div>
            </div>
          </div>

          {/* Info Section - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
                <Code2 className="text-blue-400" size={24} />
                The Developer
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm Abhinav Yadav, a Computer Science student at <span className="text-blue-400 font-semibold">MNNIT Allahabad</span> with a passion for building scalable web applications and exploring AI technologies.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My workspace reflects my journey—filled with projects, learning resources, and the tools that help me craft digital solutions that make a difference.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl ${item.bg} backdrop-blur-sm border ${item.border} hover:scale-105 transition-transform duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => handleMouseEnterInteractive?.(currentTheme?.cursorSkill)}
                  onMouseLeave={handleMouseLeaveInteractive}
                >
                  <div className={`p-3 rounded-lg ${item.bg} border ${item.border}`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <span className={`font-semibold ${item.color}`}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Fun Fact */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-500/30 backdrop-blur-sm">
              <p className="text-sm text-slate-300">
                <span className="text-orange-400 font-bold">💡 Fun Fact:</span> This workspace setup keeps me motivated through late-night coding sessions and debugging marathons!
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Tech Stack Showcase */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">Powered By</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Socket.IO', 'Tailwind CSS', 'AI/ML'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-400 text-sm font-mono hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
