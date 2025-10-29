// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = (key) => translations[language][key] || key;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Compose WhatsApp message
    const text = `
Service: ${formData.service}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.message ? `Message: ${formData.message}` : ''}
    `.trim();

    const whatsappNumber = "212780539618";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(url, '_blank');

    // Reset form
    setTimeout(() => {
      setFormData({
        service: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title text-white">
          {t('request-service')}
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Selection */}
            <div className="md:col-span-2">
              <label htmlFor="service" className="block text-gold-400 font-semibold mb-2">
                {t('choose-service')}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gold-400/50 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all duration-300"
              >
                <option value="">{t('choose-service-placeholder')}</option>
                {services.map((service) => (
                  <option key={service.title} value={t(service.title)}>
                    {t(service.title)}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gold-400 font-semibold mb-2">
                {t('full-name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('name-placeholder')}
                className="w-full bg-black/50 border border-gold-400/50 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gold-400 font-semibold mb-2">
                {t('email-address')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                className="w-full bg-black/50 border border-gold-400/50 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label htmlFor="phone" className="block text-gold-400 font-semibold mb-2">
                {t('phone-number')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+212 6 12 34 56 78"
                className="w-full bg-black/50 border border-gold-400/50 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gold-400 font-semibold mb-2">
                {t('additional-message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t('message-placeholder')}
                className="w-full bg-black/50 border border-gold-400/50 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all duration-300 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                  {language === 'en' ? 'Sending...' : 'Envoi en cours...'}
                </div>
              ) : (
                t('send')
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;