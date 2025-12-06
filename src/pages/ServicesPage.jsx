import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services.js';
import { FaArrowRight, FaCheck, FaStar, FaRocket, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-stone-500/5 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-stone-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-full px-5 py-2.5 mb-6">
            <FaRocket className="w-5 h-5 text-stone-400" />
            <span className="text-base sm:text-lg text-stone-300 font-medium">
              {t('our-services') || 'Nos Services'}
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t('our-services')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-600 mt-2">
              {t('excellence') || 'Excellence'}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            {t('services-description') || 'Des solutions complètes pour transformer vos idées en réalité digitale.'}
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Services Grid - Full Details */}
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={`service-${index}`}
              className="group relative bg-gradient-to-br from-stone-800/60 to-stone-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-stone-700/50 hover:border-stone-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-stone-500/10 to-stone-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-100' : ''
              }`}></div>
              
              <div className="relative flex flex-col lg:flex-row gap-0 lg:gap-16">
                {/* Mobile Accordion Header */}
                <div 
                  className="lg:hidden flex items-center justify-between w-full cursor-pointer pb-4 relative z-20"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex p-3 bg-gradient-to-br from-stone-700/80 to-stone-800/80 rounded-xl shadow-lg">
                      <service.icon className="w-8 h-8 text-stone-300" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      {t(service.title)}
                    </h2>
                  </div>
                  <FaChevronDown className={`text-stone-400 transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} />
                </div>

                {/* Content Wrapper - Collapsible on Mobile */}
                <div className={`
                  w-full lg:flex lg:gap-16 transition-all duration-500 ease-in-out
                  ${activeAccordion === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'}
                  overflow-hidden lg:overflow-visible
                `}>
                  {/* Left Column: Icon & Title */}
                  <div className="lg:w-1/3 flex flex-col items-start pt-4 lg:pt-0">
                    <div className="hidden lg:block relative mb-8">
                      <div className="inline-flex p-6 bg-gradient-to-br from-stone-700/80 to-stone-800/80 rounded-2xl shadow-lg shadow-stone-900/50">
                        <service.icon className="w-16 h-16 text-stone-300" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-stone-500 to-stone-700 rounded-2xl flex items-center justify-center shadow-xl shadow-stone-500/30">
                        <span className="text-white text-lg font-bold">0{index + 1}</span>
                      </div>
                    </div>

                    <h2 className="hidden lg:block text-3xl sm:text-4xl font-bold text-white mb-4">
                      {t(service.title)}
                    </h2>
                    
                    <p className="text-stone-400 leading-relaxed text-lg mb-8">
                      {t(service.description)}
                    </p>

                    <div className="flex items-center gap-3 text-stone-400 bg-stone-800/50 px-4 py-2 rounded-lg border border-stone-700/50">
                      <FaStar className="w-5 h-5 text-stone-500" />
                      <span className="font-medium">
                        {service.duration || 'Flexible'}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Features */}
                  <div className="lg:w-2/3 pt-8 lg:pt-0">
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <span className="w-8 h-1 bg-stone-500 rounded-full"></span>
                      {language === 'en' ? 'Included Features' : language === 'fr' ? 'Fonctionnalités Incluses' : 'الميزات المضمنة'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features && service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-start gap-3 p-4 rounded-xl bg-stone-800/30 border border-stone-700/30 hover:bg-stone-800/50 hover:border-stone-600/50 transition-all duration-300"
                        >
                          <div className="mt-1 w-6 h-6 rounded-full bg-stone-700/50 flex items-center justify-center flex-shrink-0">
                            <FaCheck className="w-3 h-3 text-stone-400" />
                          </div>
                          <span className="text-stone-300 text-base leading-snug">{t(feature)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex justify-end">
                      <a 
                        href="/#contact" 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-stone-400 to-stone-600 text-stone-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-stone-500/20 hover:scale-105"
                      >
                        <span>{language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'ابدأ الآن'}</span>
                        <FaArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-stone-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Need a Custom Solution?' : language === 'fr' ? 'Besoin d\'une Solution Personnalisée ?' : 'هل تحتاج إلى حل مخصص؟'}
            </h3>
            <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Contact us to discuss your specific requirements and how we can help you achieve your goals."
                : language === 'fr'
                ? "Contactez-nous pour discuter de vos besoins spécifiques et comment nous pouvons vous aider à atteindre vos objectifs."
                : "اتصل بنا لمناقشة متطلباتك الخاصة وكيف يمكننا مساعدتك في تحقيق أهدافك."
              }
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-3 border-2 border-stone-600 text-white font-semibold py-4 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-stone-400 hover:bg-stone-400/5 hover:scale-105"
            >
              <span>{language === 'en' ? 'Contact Us' : language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}</span>
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
