// src/components/Navbar.jsx
import React from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Navbar = ({
  sections,
  activeSection,
  scrollToSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  currentTheme,
  themes,
  currentThemeKey,
  setCurrentThemeKey,
  showThemeSwitcher,
  setShowThemeSwitcher,
  handleMouseEnterInteractive,
  handleMouseLeaveInteractive,
}) => {
  return (
    <nav className={`fixed top-0 z-50 w-full ${currentTheme.navBg} shadow-lg backdrop-blur-sm border-b ${currentTheme.navBorder}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a
          href="#"
          className={`text-2xl font-bold ${currentTheme.primaryAccentText} hover:${currentTheme.secondaryAccentText} transition-colors`}
          onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorNav)}
          onMouseLeave={handleMouseLeaveInteractive}
        >
          AbhinavYadav<span className={currentTheme.secondaryAccentText}>.dev</span>
        </a>
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorNav)}
              onMouseLeave={handleMouseLeaveInteractive}
              className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 interactive-element
                ${activeSection === section.id
                  ? `${currentTheme.primaryAccentText} ${currentTheme.navActiveBg} border ${currentTheme.navActiveBorder} ${currentTheme.navActiveShadow} animate-pulse-glow`
                  : `${currentTheme.textDefault} ${currentTheme.navButtonHoverBg}`
                }`}
            >
              <section.icon size={18} />
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Theme Switcher Button */}
        <div className="relative">
          <button
            onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
            onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorNav)}
            onMouseLeave={handleMouseLeaveInteractive}
            className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 interactive-element
              ${currentTheme.primaryAccentText} ${currentTheme.navButtonHoverBg}`}
          >
            <Palette size={18} />
            <span>Theme</span>
          </button>
          {showThemeSwitcher && (
            <div className={`absolute right-0 mt-2 w-40 ${currentTheme.sectionBg} border ${currentTheme.navBorder} rounded-md shadow-lg z-50`}>
              {Object.keys(themes).map(themeKey => (
                <button
                  key={themeKey}
                  onClick={() => {
                    setCurrentThemeKey(themeKey);
                    setShowThemeSwitcher(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${currentTheme.textDefault} ${themeKey === currentThemeKey ? currentTheme.primaryAccentText : currentTheme.navButtonHoverBg} rounded-md transition-colors`}
                  onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorNav)}
                  onMouseLeave={handleMouseLeaveInteractive}
                >
                  {themes[themeKey].name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorNav)}
            onMouseLeave={handleMouseLeaveInteractive}
            className={`${currentTheme.textDefault} hover:${currentTheme.primaryAccentText} focus:outline-none focus:ring-2 focus:ring-${currentThemeKey.split('-')[0]}-500 rounded-md p-2 interactive-element`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${currentTheme.navBg.replace('bg-opacity-80', 'bg-opacity-95')} pb-4 border-t ${currentTheme.navBorder}`}>
          <div className="flex flex-col items-center space-y-4 pt-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => handleMouseEnterInteractive(currentTheme.cursorNav)}
                onMouseLeave={handleMouseLeaveInteractive}
                className={`flex items-center space-x-2 rounded-md px-4 py-2 w-11/12 text-lg font-medium transition-all duration-300 justify-center interactive-element
                  ${activeSection === section.id
                    ? `${currentTheme.primaryAccentText} ${currentTheme.navActiveBg} border ${currentTheme.navActiveBorder} ${currentTheme.navActiveShadow}`
                    : `${currentTheme.textDefault} ${currentTheme.navButtonHoverBg}`
                  }`}
              >
                <section.icon size={20} />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;