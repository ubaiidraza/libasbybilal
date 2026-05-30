import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader'; // Preloader yahan import ho gaya

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      {/* Preloader sab se top par, jab tak loading hogi screen cover rakhega */}
      <Preloader />

      <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-[#FDFBF7] selection:bg-[#D4AF37] selection:text-black">
        
        {/* Universal Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Universal Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;