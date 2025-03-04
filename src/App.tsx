import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { MatrixRain } from './components/effects/MatrixRain';
import { useKeyboardSound } from './hooks/useKeyboardSound';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize keyboard sound effect
  useKeyboardSound();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-500">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full border-4 border-cyber-500 border-t-transparent animate-spin mx-auto mb-6"></div>
          <h1 className="text-3xl font-bold text-cyber-500 glitch" data-text="INITIALIZING">INITIALIZING</h1>
          <p className="text-terminal-500 mt-2 font-fira">Sequência de inicialização do sistema em andamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <MatrixRain />
      <div className="noise opacity-5"></div>
      
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;