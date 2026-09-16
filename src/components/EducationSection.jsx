// src/components/EducationSection.jsx
import React from 'react';
import { GraduationCap, Award, Trophy, Code2, TrendingUp } from 'lucide-react';

const EducationSection = ({ sectionRef, isVisible, currentTheme, handleMouseEnterInteractive, handleMouseLeaveInteractive }) => {
  const education = [
    {
      institution: 'Motilal Nehru National Institute Of Technology',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      period: '2023-Present',
      score: 'CPI: 7.57',
      icon: '🎓',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      institution: 'SP Inter College Kunda',
      degree: 'Intermediate, Uttar Pradesh Board',
      period: '2021',
      score: 'Percentage: 75.2',
      icon: '📚',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      institution: 'Hathigawan Inter College',
      degree: 'High School, Uttar Pradesh Board',
      period: '2019',
      score: 'Percentage: 84.16',
      icon: '🏫',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const codingProfiles = [
    {
      platform: 'LeetCode',
      username: 'acb_abhi9',
      rating: '2011',
      solved: '800+',
      link: 'https://leetcode.com/acb_abhi9',
      icon: '💻',
      color: 'from-orange-500 to-yellow-500',
      bgGlow: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      hoverBorder: 'hover:border-orange-400'
    },
    {
      platform: 'Codeforces',
      username: 'abhinav_yadav_cse',
      rating: '1209',
      solved: '800+',
      link: 'https://codeforces.com/profile/abhinav_yadav_cse',
      icon: '⚔️',
      color: 'from-blue-500 to-indigo-500',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400'
    },
    {
      platform: 'GeeksforGeeks',
      username: 'abhinav_gfg',
      rating: 'Active',
      solved: '800+',
      link: 'https://auth.geeksforgeeks.org/user/abhinav_gfg',
      icon: '🚀',
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      hoverBorder: 'hover:border-green-400'
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className={`relative overflow-hidden py-24 px-6 ${currentTheme.textDefault} border-y ${currentTheme.navBorder}`}
      style={{ backgroundColor: '#0a0e1a' }}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className={`container mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap size={32} className="text-blue-400" />
            <h2 className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400`}>
              Academic Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-slate-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] animate-fade-in staggered-item-${index}`}
                onMouseEnter={() => handleMouseEnterInteractive?.(currentTheme?.cursorSkill)}
                onMouseLeave={handleMouseLeaveInteractive}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    {edu.degree}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-700/50">
                    <span className="text-xs font-mono text-emerald-400">{edu.period}</span>
                    <span className="text-xs font-bold text-blue-400 bg-blue-900/20 px-2 py-1 rounded">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Trophy size={32} className="text-yellow-400" />
            <h2 className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400`}>
              Coding Battlegrounds
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-500/30 backdrop-blur-sm">
              <Code2 size={40} className="text-emerald-400 animate-pulse" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  800+ Problems Solved
                </p>
                <p className="text-sm text-slate-400 mt-1">Across LeetCode, Codeforces & GeeksforGeeks</p>
              </div>
              <TrendingUp size={40} className="text-blue-400 animate-bounce" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${profile.bgGlow} backdrop-blur-xl rounded-2xl p-8 border ${profile.borderColor} ${profile.hoverBorder} transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] animate-slide-up staggered-item-${index + 3}`}
                onMouseEnter={() => handleMouseEnterInteractive?.(currentTheme?.cursorLink)}
                onMouseLeave={handleMouseLeaveInteractive}
              >
                {/* Animated Glow Effect */}
                <div className={`absolute -inset-[2px] bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-100 rounded-2xl blur-sm transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {profile.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {profile.platform}
                  </h3>
                  
                  <p className="text-sm text-slate-400 font-mono mb-4">
                    @{profile.username}
                  </p>
                  
                  <div className="space-y-2">
                    <div className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${profile.color} bg-opacity-10`}>
                      <span className="text-xs text-slate-400">Max Rating</span>
                      <span className={`text-lg font-black bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                        {profile.rating}
                      </span>
                    </div>
                    
                    <div className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${profile.color} bg-opacity-10`}>
                      <span className="text-xs text-slate-400">Problems</span>
                      <span className={`text-lg font-black bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                        {profile.solved}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span>View Profile</span>
                    <Award size={14} className="group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Achievements Summary */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-blue-900/10 border border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <p className="text-4xl font-black text-blue-400 mb-2">2011</p>
                <p className="text-sm text-slate-400">LeetCode Peak</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <p className="text-4xl font-black text-purple-400 mb-2">1209</p>
                <p className="text-sm text-slate-400">Codeforces Peak</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-emerald-900/10 border border-emerald-500/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <p className="text-4xl font-black text-emerald-400 mb-2">800+</p>
                <p className="text-sm text-slate-400">Total Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
