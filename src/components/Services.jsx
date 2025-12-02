// src/components/Services.jsx
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services.js';
import { FaArrowRight, FaCheck, FaStar, FaRocket } from 'react-icons/fa';

const Services = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-stone-500/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-stone-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-full px-5 py-2.5 mb-6">
            <FaRocket className="w-5 h-5 text-stone-400" />
            <span className="text-base sm:text-lg text-stone-300 font-medium">
              {t('our-services') || 'Nos Services'}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t('our-services')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-600 mt-2">
              {t('excellence') || 'Excellence'}
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            {t('services-description') || 'Des solutions complètes pour transformer vos idées en réalité digitale.'}
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-to-br from-stone-800/60 to-stone-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-stone-700/50 hover:border-stone-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-stone-500/20"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-stone-500/10 to-stone-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-100' : ''
              }`}></div>
              
              {/* Card Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-stone-500 to-stone-700 rounded-2xl flex items-center justify-center shadow-xl shadow-stone-500/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg font-bold">0{index + 1}</span>
              </div>

              {/* Service Icon */}
              <div className="relative mb-8">
                <div className="inline-flex p-5 lg:p-6 bg-gradient-to-br from-stone-700/80 to-stone-800/80 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-stone-900/50">
                  <service.icon className="w-12 h-12 sm:w-14 sm:h-14 text-stone-300 group-hover:text-stone-100 transition-colors duration-300" />
                </div>
                {/* Animated Ring */}
                <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-stone-500/50 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
              </div>

              {/* Service Content */}
              <div className="relative space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-stone-300 transition-colors duration-300">
                    {t(service.title)}
                  </h3>
                  
                  <p className="text-stone-400 leading-relaxed text-base sm:text-lg">
                    {t(service.description)}
                  </p>
                </div>

                {/* Features List */}
                {service.features && (
                  <div className="space-y-2.5">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start gap-3 text-stone-400 text-sm sm:text-base group-hover:text-stone-300 transition-colors duration-300"
                      >
                        <FaCheck className="w-4 h-4 text-stone-500 flex-shrink-0 mt-1 group-hover:text-stone-400 transition-colors duration-300" />
                        <span className="leading-snug">{t(feature)}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-stone-500 pl-7 pt-1">
                        +{service.features.length - 4} {language === 'en' ? 'more features' : language === 'fr' ? 'autres fonctionnalités' : 'ميزات أخرى'}
                      </div>
                    )}
                  </div>
                )}

                {/* Footer with Duration & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-stone-700/50 group-hover:border-stone-600/50 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <FaStar className="w-4 h-4 text-stone-500 group-hover:text-stone-400 transition-colors duration-300" />
                    <span className="text-sm text-stone-500 font-medium group-hover:text-stone-400 transition-colors duration-300">
                      {service.duration || 'Flexible'}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors duration-300 group/btn">
                    <span className="text-sm font-semibold">
                      {language === 'en' ? 'Details' : language === 'fr' ? 'Détails' : 'التفاصيل'}
                    </span>
                    <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-stone-500/20 to-stone-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-stone-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Start Your Project?' : 'Prêt à Démarrer Votre Projet ?'}
            </h3>
            <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Let's work together to bring your vision to life with our expert services."
                : "Travaillons ensemble pour donner vie à votre vision avec nos services experts."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-stone-400 to-stone-600 text-stone-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-stone-500/25 hover:scale-105"
              >
                <span>{language === 'en' ? 'Get Started' : 'Commencer'}</span>
                <FaRocket className="w-4 h-4" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center gap-3 border-2 border-stone-600 text-white font-semibold py-4 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-stone-400 hover:bg-stone-400/5 hover:scale-105"
              >
                <span>{language === 'en' ? 'Learn More' : 'En Savoir Plus'}</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;