import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/SocialMediaLinks';


function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* CONTENT */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
         <Skills />
          
          <Contact />
           <Footer />
         
        </main>
      </div>
    </div>
  );
}

export default App;
