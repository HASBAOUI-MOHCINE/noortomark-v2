
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { useTheme } from './hooks/useTheme.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import ContactForm from './components/ContactForm.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

function AppContent() {
  useTheme(); // Initialize theme
  
  return (
    <div className="min-h-screen text-stone-100" style={{background: 'linear-gradient(to bottom right, #11110e, #342d24, #11110e)'}}>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <ContactForm />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;