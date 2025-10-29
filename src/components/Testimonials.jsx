// src/components/Testimonials.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { testimonials } from '../data/testimonials.js';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12">
          {t('testimonials-title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-5 sm:p-6 md:p-8 card-hover group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20">
                <FaQuoteLeft size={24} className="text-gold-400 sm:w-8 sm:h-8" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-3 sm:mb-4 gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    size={14} 
                    className="text-gold-400 fill-current sm:w-4 sm:h-4" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-slate-300 italic mb-4 sm:mb-6 leading-relaxed relative z-10">
                {t(testimonial.text)}
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gold-400/20">
                <span className="text-sm sm:text-base text-gold-400 font-semibold">
                  {testimonial.author}
                </span>
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-slate-800/50 border border-gold-400/30 rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gold-400 mb-3 sm:mb-4">
              {language === 'en' ? 'Ready to elevate your brand?' : 'Prêt à élever votre marque ?'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-5 sm:mb-6">
              {language === 'en' 
                ? 'Join our satisfied clients and experience the Noortomark difference.'
                : 'Rejoignez nos clients satisfaits et découvrez la différence Noortomark.'
              }
            </p>
            <a 
              href="#contact" 
              className="btn-gold inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
            >
              {language === 'en' ? 'Get Started Today' : 'Commencer aujourd\'hui'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;