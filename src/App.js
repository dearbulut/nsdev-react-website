import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import LanguageSelectionScreen from './components/LanguageSelectionScreen';

// Import global styles
import './styles/GlobalStyles.css';

const App = () => {
  const { i18n } = useTranslation();
  const [showLanguageSelection, setShowLanguageSelection] = useState(false);
  
  useEffect(() => {
    // Check if user has already selected a language
    const languageSelected = localStorage.getItem('languageSelected');
    
    if (!languageSelected) {
      setShowLanguageSelection(true);
    }
  }, []);
  
  const handleLanguageSelectionComplete = () => {
    setShowLanguageSelection(false);
  };
  
  return (
    <ThemeProvider>
      <Router>
        {showLanguageSelection ? (
          <LanguageSelectionScreen onComplete={handleLanguageSelectionComplete} />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;