// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../hooks/useTheme.js';
import { translations } from '../data/translations.js';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-white">
            Noortomark
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {t(item.label)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle */}
            <div className="flex bg-slate-800/50 rounded-lg p-1">
              {['fr', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
                    language === lang
                      ? 'bg-indigo-500 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-slate-900/95 backdrop-blur-lg rounded-b-lg">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium px-4 py-2"
                >
                  {t(item.label)}
                </a>
              ))}
              <div className="flex items-center space-x-3 px-4 pt-3 border-t border-slate-700">
                <div className="flex bg-slate-800/50 rounded-lg p-1">
                  {['fr', 'en'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
                        language === lang
                          ? 'bg-indigo-500 text-white'
                          : 'text-slate-400'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-slate-300 hover:text-white transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;