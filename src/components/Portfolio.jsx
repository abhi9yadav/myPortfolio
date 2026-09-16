// src/components/Portfolio.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { themes } from '../constants/themes';
import useParticles from '../hooks/useParticles'; // Custom hook for particles
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Custom hook for scroll observation
import { Home, User, Lightbulb, Briefcase, GraduationCap, Mail } from 'lucide-react'; // Import icons here for sections array

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loadingProject, setLoadingProject] = useState(null);
  const [geminiError, setGeminiError] = useState(null);
  const [currentThemeKey, setCurrentThemeKey] = useState(() => localStorage.getItem('portfolioTheme') || 'deep-space');
  const currentTheme = themes[currentThemeKey];
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  // States for scroll-in animations
  const [homeVisible, setHomeVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  // Refs for Intersection Observer
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Custom Cursor Glow States
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorColor, setCursorColor] = useState(currentTheme.cursorDefault);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  

  // Update cursor default color when theme changes
  useEffect(() => {
    setCursorColor(currentTheme.cursorDefault);
  }, [currentThemeKey, currentTheme.cursorDefault]);

  // Save theme to local storage
  useEffect(() => {
    localStorage.setItem('portfolioTheme', currentThemeKey);
  }, [currentThemeKey]);

  // Use custom hook for Intersection Observer
  useIntersectionObserver(
    [homeRef, aboutRef, skillsRef, projectsRef, educationRef, contactRef],
    setActiveSection,
    {
      home: setHomeVisible,
      about: setAboutVisible,
      skills: setSkillsVisible,
      projects: setProjectsVisible,
      education: setEducationVisible,
      contact: setContactVisible,
    }
  );

  // Mouse move effect for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnterInteractive = (color) => {
    setIsHoveringInteractive(true);
    setCursorColor(color);
  };

  const handleMouseLeaveInteractive = () => {
    setIsHoveringInteractive(false);
    setCursorColor(currentTheme.cursorDefault);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust for fixed navbar
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Lightbulb, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

 

  return (
    <div className={`min-h-screen ${currentTheme.appBg} font-inter ${currentTheme.textDefault} antialiased relative overflow-hidden`}>
      {/* Custom Tailwind keyframes for animations */}
      <style>
        {`
          /* Custom cubic-bezier for spring-like effect */
          .ease-spring {
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 10px rgba(79, 70, 229, 0.4), 0 0 20px rgba(79, 70, 229, 0.2); }
            50% { box-shadow: 0 0 15px rgba(79, 70, 229, 0.6), 0 0 30px rgba(79, 70, 229, 0.4); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
          .animate-pulse-glow {
            animation: pulseGlow 2s infinite alternate;
          }
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Staggered animation classes */
          .staggered-item-0 { animation-delay: 0s; }
          .staggered-item-1 { animation-delay: 0.1s; }
          .staggered-item-2 { animation-delay: 0.2s; }
          .staggered-item-3 { animation-delay: 0.3s; }
          .staggered-item-4 { animation-delay: 0.4s; }
          .staggered-item-5 { animation-delay: 0.5s; }
          .staggered-item-6 { animation-delay: 0.6s; }
          .staggered-item-7 { animation-delay: 0.7s; }
          .staggered-item-8 { animation-delay: 0.8s; }
          .staggered-item-9 { animation-delay: 0.9s; }
        `}
      </style>

      <CustomCursor
        cursorX={cursorX}
        cursorY={cursorY}
        cursorColor={cursorColor}
        isHoveringInteractive={isHoveringInteractive}
      />

      <Navbar
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentTheme={currentTheme}
        themes={themes}
        currentThemeKey={currentThemeKey}
        setCurrentThemeKey={setCurrentThemeKey}
        showThemeSwitcher={showThemeSwitcher}
        setShowThemeSwitcher={setShowThemeSwitcher}
        handleMouseEnterInteractive={handleMouseEnterInteractive}
        handleMouseLeaveInteractive={handleMouseLeaveInteractive}
      />

      <main className="relative z-10 pt-16">
        <HomeSection
          sectionRef={homeRef}
          isVisible={homeVisible}
          currentTheme={currentTheme}
          scrollToSection={scrollToSection}
          handleMouseEnterInteractive={handleMouseEnterInteractive}
          handleMouseLeaveInteractive={handleMouseLeaveInteractive}
          useParticles={useParticles}
        />
        <AboutSection
          sectionRef={aboutRef}
          isVisible={aboutVisible}
          currentTheme={currentTheme}
          handleMouseEnterInteractive={handleMouseEnterInteractive}
          handleMouseLeaveInteractive={handleMouseLeaveInteractive}
        />
        <SkillsSection
          sectionRef={skillsRef}
          isVisible={skillsVisible}
          currentTheme={currentTheme}
          handleMouseEnterInteractive={handleMouseEnterInteractive}
          handleMouseLeaveInteractive={handleMouseLeaveInteractive}
        />
        <ProjectsSection
          sectionRef={projectsRef}
          isVisible={projectsVisible}
          currentTheme={currentTheme}
         
          handleMouseEnterInteractive={handleMouseEnterInteractive}
          handleMouseLeaveInteractive={handleMouseLeaveInteractive}
        />
        <EducationSection
          sectionRef={educationRef}
          isVisible={educationVisible}
          currentTheme={currentTheme}
          handleMouseEnterInteractive={handleMouseEnterInteractive}
          handleMouseLeaveInteractive={handleMouseLeaveInteractive}
        />
        <ContactSection
          sectionRef={contactRef}
          isVisible={contactVisible}
          currentTheme={currentTheme}
          handleMouseEnterInteractive={handleMouseEnterInteractive}
          handleMouseLeaveInteractive={handleMouseLeaveInteractive}
        />
      </main>

      <Footer currentTheme={currentTheme} />
    </div>
  );
};

export default Portfolio;