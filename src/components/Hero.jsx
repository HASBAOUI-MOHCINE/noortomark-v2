// src/components/Hero.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900"></div>
      
      {/* Animated orbs with gold tint */}
      <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-gold-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-gold-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gold-400/10 border border-gold-400/30 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
          <span className="text-base md:text-lg text-gold-400 font-medium">
            {language === 'en' ? 'Premium Digital Solutions' : 'Solutions Digitales Premium'}
          </span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-white tracking-tight leading-tight">
          Noortomark
        </h1>
        
        {/* Subtitle with gradient */}
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-stone-300 max-w-4xl mx-auto leading-relaxed px-4">
          {t('hero-text')}
        </p>
        
        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 max-w-3xl mx-auto">
          <span className="px-5 py-2.5 bg-stone-800/50 border border-gold-400/20 rounded-full text-base sm:text-lg text-stone-300 backdrop-blur-sm">
            ✨ {language === 'en' ? 'Web Development' : 'Développement Web'}
          </span>
          <span className="px-5 py-2.5 bg-stone-800/50 border border-gold-400/20 rounded-full text-base sm:text-lg text-stone-300 backdrop-blur-sm">
            🎨 {language === 'en' ? 'Graphic Design' : 'Design Graphique'}
          </span>
          <span className="px-5 py-2.5 bg-stone-800/50 border border-gold-400/20 rounded-full text-base sm:text-lg text-stone-300 backdrop-blur-sm">
            📱 {language === 'en' ? 'Digital Marketing' : 'Marketing Digital'}
          </span>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#services" 
            className="btn-gold px-10 py-5 text-lg md:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-400/20 w-full sm:w-auto"
          >
            {t('discover-services')}
          </a>
          <a 
            href="#contact" 
            className="btn-dark px-10 py-5 text-lg md:text-xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            {t('place-order')}
          </a>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-2">50+</div>
            <div className="text-sm sm:text-base text-stone-400">{language === 'en' ? 'Projects' : 'Projets'}</div>
          </div>
          <div className="text-center border-x border-gold-400/20">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-2">30+</div>
            <div className="text-sm sm:text-base text-stone-400">{language === 'en' ? 'Clients' : 'Clients'}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-2">98%</div>
            <div className="text-sm sm:text-base text-stone-400">{language === 'en' ? 'Satisfaction' : 'Satisfaction'}</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-stone-400 uppercase tracking-wider">
          {language === 'en' ? 'Scroll Down' : 'Défiler'}
        </span>
        <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;