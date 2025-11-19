// src/components/About.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { FaRocket, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  const features = [
    {
      icon: FaRocket,
      title: language === 'en' ? 'Innovation' : 'Innovation',
      description: language === 'en' 
        ? 'Cutting-edge solutions for modern businesses' 
        : 'Des solutions de pointe pour les entreprises modernes'
    },
    {
      icon: FaLightbulb,
      title: language === 'en' ? 'Creativity' : 'Créativité',
      description: language === 'en'
        ? 'Unique designs that make your brand stand out'
        : 'Des designs uniques qui font ressortir votre marque'
    },
    {
      icon: FaUsers,
      title: language === 'en' ? 'Collaboration' : 'Collaboration',
      description: language === 'en'
        ? 'Working together to achieve your goals'
        : 'Travailler ensemble pour atteindre vos objectifs'
    },
    {
      icon: FaAward,
      title: language === 'en' ? 'Excellence' : 'Excellence',
      description: language === 'en'
        ? 'Premium quality in every project'
        : 'Qualité premium dans chaque projet'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-b from-stone-800 to-stone-900">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="section-title text-white text-4xl sm:text-5xl md:text-6xl mb-12">
          {t('about-title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl md:text-2xl text-stone-300 leading-relaxed">
              {t('about-p1')}
            </p>
            <p className="text-xl sm:text-2xl md:text-2xl text-stone-300 leading-relaxed">
              {t('about-p2')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-stone-900/50 rounded-xl">
                <div className="text-4xl sm:text-5xl md:text-5xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-stone-300 text-base sm:text-lg uppercase tracking-wider">
                  {language === 'en' ? 'Projects' : 'Projets'}
                </div>
              </div>
              <div className="text-center p-6 bg-stone-900/50 rounded-xl">
                <div className="text-4xl sm:text-5xl md:text-5xl font-bold text-gold-400 mb-2">30+</div>
                <div className="text-stone-300 text-base sm:text-lg uppercase tracking-wider">
                  {language === 'en' ? 'Clients' : 'Clients'}
                </div>
              </div>
              <div className="text-center p-6 bg-stone-900/50 rounded-xl">
                <div className="text-4xl sm:text-5xl md:text-5xl font-bold text-gold-400 mb-2">98%</div>
                <div className="text-stone-300 text-base sm:text-lg uppercase tracking-wider">
                  {language === 'en' ? 'Satisfaction' : 'Satisfaction'}
                </div>
              </div>
              <div className="text-center p-6 bg-stone-900/50 rounded-xl">
                <div className="text-4xl sm:text-5xl md:text-5xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-stone-300 text-base sm:text-lg uppercase tracking-wider">
                  {language === 'en' ? 'Support' : 'Support'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-stone-800/50 rounded-2xl p-8 border border-gold-400/30 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="text-center p-6 bg-black/50 rounded-xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 card-hover group"
                  >
                    <div className="flex justify-center mb-4">
                      <feature.icon 
                        className="text-gold-400 group-hover:scale-110 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12" 
                      />
                    </div>
                    <h3 className="font-bold text-gold-400 mb-2 text-lg sm:text-xl transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gold-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gold-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-400 mb-4 sm:mb-6 relative z-10">
              {language === 'en' ? 'Our Mission' : 'Notre Mission'}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed relative z-10">
              {language === 'en' 
                ? 'To transform your ideas into impactful digital experiences that drive growth and build lasting brand value.'
                : 'Transformer vos idées en expériences digitales impactantes qui stimulent la croissance et construisent une valeur de marque durable.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;