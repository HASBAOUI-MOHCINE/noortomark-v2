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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          {t('testimonials-title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-8 card-hover group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <FaQuoteLeft size={32} className="text-gold-400" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    size={16} 
                    className="text-gold-400 fill-current" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10">
                {t(testimonial.text)}
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-gold-400/20">
                <span className="text-gold-400 font-semibold">
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
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 border border-gold-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gold-400 mb-4">
              {language === 'en' ? 'Ready to elevate your brand?' : 'Prêt à élever votre marque ?'}
            </h3>
            <p className="text-slate-300 mb-6">
              {language === 'en' 
                ? 'Join our satisfied clients and experience the Noortomark difference.'
                : 'Rejoignez nos clients satisfaits et découvrez la différence Noortomark.'
              }
            </p>
            <a 
              href="#contact" 
              className="btn-gold inline-block"
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