import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Testimonials from '../components/Testimonials.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Testimonials />
    </>
  );
};

export default Home;
