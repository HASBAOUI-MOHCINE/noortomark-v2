// src/components/Footer.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  const socialLinks = [
    {
      icon: FaFacebook,
      href: 'http://facebook.com/share/1FV5bkLU7J/?mibextid=wwXIfr',
      label: 'Facebook'
    },
    {
      icon: FaTiktok,
      href: 'http://tiktok.com/@noortomark',
      label: 'Tiktok'
    },
    {
      icon: FaYoutube,
      href: 'https://youtube.com/@NOORTOMARK',
      label: 'Youtube'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/noortomark',
      label: 'Instagram'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#services', label: 'services' },
    { href: '#contact', label: 'contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gold-400/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gold-400 mb-4">Noortomark</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              {language === 'en' 
                ? 'Transforming brands with premium digital solutions and unparalleled expertise.'
                : 'Transformer les marques avec des solutions digitales premium et une expertise inégalée.'
              }
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-300 text-sm">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gold-400 flex-shrink-0" />
                <span className="break-all">noortomark@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gold-400 flex-shrink-0" />
                <span className="whitespace-nowrap">+212 7 80 53 96 18</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-gold-400 transition-colors duration-300 inline-block"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">
              {language === 'en' ? 'Connect With Us' : 'Connectez-vous'}
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold-400/10 border border-gold-400/30 rounded-lg text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-400/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <small className="text-slate-300 text-center sm:text-left">
              {t('copyright')}
            </small>
            <div className="text-sm text-slate-300 text-center sm:text-right">
              <span>{language === 'en' ? 'Premium Digital Solutions' : 'Solutions Digitales Premium'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;