import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Hero />
        <Features />
        <Screenshots />
        <FAQ />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}

export default App;
