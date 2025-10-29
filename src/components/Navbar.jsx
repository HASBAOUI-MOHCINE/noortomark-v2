// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../hooks/useTheme.js';
import { translations } from '../data/translations.js';
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key) => translations[language][key] || key;

  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#services', label: 'services' },
    { href: '#contact', label: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-slate-900/50 border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo amélioré */}
          <a 
            href="#home" 
            className="flex items-center space-x-2 group shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/25">
              <span className="text-slate-900 font-bold text-sm sm:text-base">N</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-300">
              Noortomark
            </span>
          </a>

          {/* Desktop Navigation amélioré */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-1 border border-slate-700/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeSection === item.label.replace('#', '')
                    ? 'text-white bg-gradient-to-r from-amber-400/20 to-amber-600/20 border border-amber-400/30 shadow-lg shadow-amber-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {t(item.label)}
                {activeSection === item.label.replace('#', '') && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Controls améliorés */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            {/* Language Toggle amélioré */}
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-slate-700/50">
              <FaGlobe className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="flex bg-slate-700/50 rounded-lg p-0.5">
                {['fr', 'en'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                      language === lang
                        ? 'text-white bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg shadow-amber-500/25'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-600/50'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Séparateur */}
            <div className="w-px h-6 bg-slate-700/50 shrink-0"></div>

            {/* Theme Toggle amélioré */}
            <button
              onClick={toggleTheme}
              className="group p-2.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:border-amber-400/30 hover:bg-amber-400/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FaSun className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <FaMoon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button amélioré */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden group p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:border-amber-400/30 hover:bg-amber-400/10 transition-all duration-300 shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <FaBars className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu amélioré */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in pb-4">
            <div className="mt-4 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-slate-900/50 overflow-hidden">
              {/* Navigation Items */}
              <div className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                      activeSection === item.label.replace('#', '')
                        ? 'text-white bg-gradient-to-r from-amber-400/20 to-amber-600/20 border border-amber-400/30 shadow-lg shadow-amber-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full shrink-0 ${
                      activeSection === item.label.replace('#', '') 
                        ? 'bg-amber-400' 
                        : 'bg-slate-600'
                    }`}></div>
                    <span>{t(item.label)}</span>
                  </a>
                ))}
              </div>

              {/* Controls Mobile */}
              <div className="px-4 py-4 mt-2 border-t border-slate-700/50">
                <div className="flex items-center justify-between gap-3">
                  {/* Language Toggle Mobile */}
                  <div className="flex items-center space-x-2 flex-1">
                    <FaGlobe className="w-4 h-4 text-slate-400 shrink-0" />
                    <div className="flex bg-slate-700/50 rounded-lg p-1 flex-1">
                      {['fr', 'en'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`flex-1 px-4 py-2 text-sm font-semibold rounded transition-all duration-300 ${
                            language === lang
                              ? 'text-white bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg shadow-amber-500/25'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="p-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white hover:border-amber-400/30 hover:bg-amber-400/10 transition-all duration-300 shrink-0"
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <FaSun className="w-5 h-5" />
                    ) : (
                      <FaMoon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;