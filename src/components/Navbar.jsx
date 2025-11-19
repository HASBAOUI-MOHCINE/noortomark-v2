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
        ? 'backdrop-blur-xl shadow-2xl border-b' 
        : 'bg-transparent'
    }`} style={scrolled ? {backgroundColor: 'rgba(17, 17, 14, 0.95)', boxShadow: '0 25px 50px -12px rgba(17, 17, 14, 0.5)', borderColor: 'rgba(52, 45, 36, 0.5)'} : {}}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo amélioré */}
          <a 
            href="#home" 
            className="flex items-center space-x-2 group shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(to bottom right, #bd915a, #7d5a34)', boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.25)'}}>
              <span className="font-bold text-sm sm:text-base" style={{color: '#11110e'}}>N</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent transition-all duration-300" style={{background: 'linear-gradient(to right, #ffffff, #e2e8f0)', backgroundClip: 'text'}}>
              Noortomark
            </span>
          </a>

          {/* Desktop Navigation amélioré */}
          <div className="hidden md:flex items-center space-x-1 backdrop-blur-sm rounded-2xl p-1" style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeSection === item.label.replace('#', '')
                    ? 'text-white border shadow-lg'
                    : 'text-stone-300 hover:text-white'
                }`}
                style={activeSection === item.label.replace('#', '') ? {
                  background: 'linear-gradient(to right, rgba(189, 145, 90, 0.2), rgba(125, 90, 52, 0.2))',
                  borderColor: 'rgba(189, 145, 90, 0.3)',
                  boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.1)'
                } : {}}
                onMouseEnter={(e) => !activeSection === item.label.replace('#', '') && (e.target.style.backgroundColor = 'rgba(124, 108, 91, 0.5)')}
                onMouseLeave={(e) => !activeSection === item.label.replace('#', '') && (e.target.style.backgroundColor = 'transparent')}
              >
                {t(item.label)}
                {activeSection === item.label.replace('#', '') && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full" style={{backgroundColor: '#bd915a'}}></div>
                )}
              </a>
            ))}
          </div>

          {/* Controls améliorés */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            {/* Language Toggle amélioré */}
            <div className="flex items-center space-x-2 backdrop-blur-sm rounded-xl p-1.5" style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}>
              <FaGlobe className="w-4 h-4 text-stone-400 shrink-0" />
              <div className="flex rounded-lg p-0.5" style={{backgroundColor: 'rgba(124, 108, 91, 0.5)'}}>
                {['fr', 'en', 'ar'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`relative cursor-pointer px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                      language === lang
                        ? 'text-white shadow-lg'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                    style={language === lang ? {
                      background: 'linear-gradient(to right, #bd915a, #7d5a34)',
                      boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.25)'
                    } : {}}
                    onMouseEnter={(e) => language !== lang && (e.target.style.backgroundColor = 'rgba(100, 116, 139, 0.5)')}
                    onMouseLeave={(e) => language !== lang && (e.target.style.backgroundColor = 'transparent')}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Séparateur */}
            <div className="w-px h-6 shrink-0" style={{backgroundColor: 'rgba(124, 108, 91, 0.5)'}}></div>

            {/* Theme Toggle amélioré */}
            <button
              onClick={toggleTheme}
              className="group cursor-pointer p-2.5 backdrop-blur-sm rounded-xl text-stone-300 hover:text-white transition-all duration-300"
              style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(189, 145, 90, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(189, 145, 90, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(124, 108, 91, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(52, 45, 36, 0.5)'; }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FaSun className="w-4 h-4 group-hover:scale-110 transition-transform cursor-pointer duration-300" />
              ) : (
                <FaMoon className="w-4 h-4 group-hover:scale-110 transition-transform cursor-pointer duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button amélioré */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden group p-3 backdrop-blur-sm rounded-xl text-stone-300 hover:text-white transition-all duration-300 shrink-0"
            style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(189, 145, 90, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(189, 145, 90, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(124, 108, 91, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(52, 45, 36, 0.5)'; }}
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
            <div className="mt-4 backdrop-blur-xl rounded-2xl overflow-hidden" style={{backgroundColor: 'rgba(52, 45, 36, 0.95)', border: '1px solid rgba(124, 108, 91, 0.5)', boxShadow: '0 25px 50px -12px rgba(17, 17, 14, 0.5)'}}>
              {/* Navigation Items */}
              <div className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                      activeSection === item.label.replace('#', '')
                        ? 'text-white border shadow-lg'
                        : 'text-stone-300 hover:text-white'
                    }`}
                    style={activeSection === item.label.replace('#', '') ? {
                      background: 'linear-gradient(to right, rgba(189, 145, 90, 0.2), rgba(125, 90, 52, 0.2))',
                      borderColor: 'rgba(189, 145, 90, 0.3)',
                      boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.1)'
                    } : {}}
                    onMouseEnter={(e) => activeSection !== item.label.replace('#', '') && (e.currentTarget.style.backgroundColor = 'rgba(124, 108, 91, 0.5)')}
                    onMouseLeave={(e) => activeSection !== item.label.replace('#', '') && (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{backgroundColor: activeSection === item.label.replace('#', '') ? '#bd915a' : '#64748b'}}></div>
                    <span>{t(item.label)}</span>
                  </a>
                ))}
              </div>

              {/* Controls Mobile */}
              <div className="px-4 py-4 mt-2" style={{borderTop: '1px solid rgba(124, 108, 91, 0.5)'}}>
                <div className="flex items-center justify-between gap-3">
                  {/* Language Toggle Mobile */}
                  <div className="flex items-center space-x-2 flex-1">
                    <FaGlobe className="w-4 h-4 text-stone-400 shrink-0" />
                    <div className="flex rounded-lg p-1 flex-1" style={{backgroundColor: 'rgba(124, 108, 91, 0.5)'}}>
                      {['fr', 'en', 'ar'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`flex-1 px-4 py-2 text-sm font-semibold rounded transition-all duration-300 ${
                            language === lang
                              ? 'text-white shadow-lg'
                              : 'text-stone-400 hover:text-stone-200'
                          }`}
                          style={language === lang ? {
                            background: 'linear-gradient(to right, #bd915a, #7d5a34)',
                            boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.25)'
                          } : {}}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="p-3 rounded-lg text-stone-300 hover:text-white transition-all duration-300 shrink-0"
                    style={{backgroundColor: 'rgba(124, 108, 91, 0.5)', border: '1px solid rgba(100, 116, 139, 0.5)'}}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(189, 145, 90, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(189, 145, 90, 0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(100, 116, 139, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(124, 108, 91, 0.5)'; }}
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