import React from 'react';
import { Github, ExternalLink, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NextCity',
    shortDesc: 'Civic infrastructure complaint platform.',
    fullDesc: 'A full MERN-stack platform designed to facilitate civic complaint registration and urban management, improving government transparency in rural areas.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://placehold.co/800x600/0f172a/3b82f6?text=NextCity',
    github: 'https://github.com/abhi9yadav/nextcity',
    website: 'https://nextcity1.onrender.com'
  },
  {
    id: 2,
    title: 'Shop-Circuit',
    shortDesc: 'Hostel e-commerce platform.',
    fullDesc: 'Automates shopping journeys using advanced AI agents and the Universal Commerce Protocol for a seamless, intelligent user experience.',
    tech: ['Node.js', 'React', 'MongoDB'],
    imageUrl: 'https://placehold.co/800x600/0f172a/10b981?text=Shop-Circuit',
    github: 'https://github.com/abhi9yadav/shop-circuit',
    website: 'https://shop-circuit.onrender.com/'
  },
  {
    id: 3,
    title: 'Placement Archive',
    shortDesc: 'Interview experience filter & archive.',
    fullDesc: 'A student-focused tool featuring company-wise filtering and pagination to access interview experiences from seniors for assessment preparation.',
    tech: ['React', 'Frontend Filtering', 'UI/UX'],
    imageUrl: 'https://placehold.co/800x600/0f172a/8b5cf6?text=Placement+Archive',
    github: 'https://github.com/abhi9yadav/placement-archive',
    website: 'https://placement-archive-demo.com'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative container mx-auto my-20 px-6 py-20 bg-slate-950/50 rounded-3xl shadow-2xl border border-slate-800/60 backdrop-blur-sm overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-4">
          <Cpu size={16} className="animate-pulse" />
          <span className="text-sm font-mono uppercase tracking-widest">System Modules</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 drop-shadow-lg">
          Deployed Architectures
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project) => (
          <div key={project.id} className="relative group h-[450px]">
            
            {/* Animated Glowing Border Background (Visible on Hover) */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:animate-pulse"></div>
            
            {/* Main Card Container */}
            <div className="relative h-full flex flex-col rounded-2xl bg-slate-900 overflow-hidden">
              
              {/* Background Image Layer with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-110"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/800x600/0f172a/334155?text=Project"; 
                  }}
                />
                {/* Gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent"></div>
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                
                {/* Tech Stack Floating Badges */}
                <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-emerald-300 bg-emerald-900/30 border border-emerald-500/30 px-2 py-1 rounded backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.fullDesc}
                </p>
                
                {/* Action Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-slate-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <Github size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                    <span className="font-mono text-sm tracking-wide">Repo</span>
                  </a>
                  
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-blue-400 hover:text-white transition-colors ml-auto relative overflow-hidden"
                  >
                    <span className="font-mono text-sm tracking-wide relative z-10">Launch</span>
                    <ExternalLink size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform relative z-10" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;