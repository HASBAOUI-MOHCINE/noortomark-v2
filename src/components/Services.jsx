// src/components/Services.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services.js';

const Services = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12">
          {t('our-services')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-5 sm:p-6 md:p-8 card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-gold-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center sm:justify-start">
                <service.icon size={36} className="drop-shadow-glow sm:w-12 sm:h-12" />
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gold-400 transition-colors">
                {t(service.title)}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t(service.description)}
              </p>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gold-400/20">
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;