
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { useTheme } from './hooks/useTheme.js';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import Footer from './components/Footer.jsx';

function AppContent() {
  useTheme(); // Initialize theme
  
  return (
    <div className="min-h-screen text-stone-100" style={{background: 'linear-gradient(to bottom right, #11110e, #342d24, #11110e)'}}>
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;