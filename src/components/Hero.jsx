// src/components/Hero.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0 px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated orbs - optimized for mobile */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Content - enhanced responsive */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-tight px-2">
          Noortomark
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
          {t('hero-text')}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
          <a 
            href="#services" 
            className="btn-gold w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
          >
            {t('discover-services')}
          </a>
          <a 
            href="#contact" 
            className="btn-dark w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
          >
            {t('place-order')}
          </a>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex">
        <div className="w-6 h-10 border-2 border-indigo-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;