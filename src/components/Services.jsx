// src/components/Services.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services.js';

const Services = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          {t('our-services')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-8 card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} className="drop-shadow-glow" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gold-400 transition-colors">
                {t(service.title)}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {t(service.description)}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gold-400/20">
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