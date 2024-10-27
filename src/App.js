

import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
