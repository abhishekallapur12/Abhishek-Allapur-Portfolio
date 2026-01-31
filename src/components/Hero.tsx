import React from 'react';
import { CheckCircle } from 'lucide-react';
import ScrambleText from './ScrambleText'; 
import '/styles/glitch.css';
import './hero.css';
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 sm:pt-32 flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
  {/* Content */}
  <div className="relative z-10 text-center max-w-4xl w-full mx-auto">
    
    {/* Profile Image */}
    <div className="mb-6 sm:mb-8">
      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-white/10">
        <img src="/aaa.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Glitch Heading */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-300 mb-5 sm:mb-6 leading-snug sm:leading-tight">
      <span
        data-text="Full Stack Web Developer"
        className="text-white font-normal relative inline-block glitch animate-float"
        style={{ textShadow: '2px 2px #ff00c8, -2px -2px #00fff2' }}
      >
        Full Stack Web Developer
      </span>
      <br />
      and{' '}
      <ScrambleText
        text="UI/UX Designers"
        className="text-white font-normal relative inline-block animate-glitch cursor-pointer"
        style={{ textShadow: '2px 2px #00ffff, -2px -2px #ff00ff' }}
      />
    </h1>

    {/* Subtitle */}
    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
      Crafting full-stack web apps with clean code, high performance,<br className="hidden sm:block" />
      and intuitive UI/UX.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-16 w-full max-w-md mx-auto mt-6 sm:mt-10 hero-buttons">

      {/* About Me Button */}
      <div className="relative group w-full sm:w-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-md opacity-75 group-hover:opacity-100 transition duration-700 animate-borderMove"></div>
        <button
          onClick={() => {
            const section = document.querySelector('#about');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative w-full sm:w-auto text-center bg-black text-white px-6 py-3 sm:px-8 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300 font-medium group-hover:scale-105"
        >
          About Me
        </button>
      </div>

      {/* Resume Button */}
      <div className="relative group w-full sm:w-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-md opacity-75 group-hover:opacity-100 transition duration-700 animate-borderMove"></div>
        <a
          href="/ara.pdf"
          download
          className="relative block w-full sm:w-auto text-center bg-black text-white px-6 py-3 sm:px-8 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300 font-medium group-hover:scale-105"
        >
          Resume
        </a>
      </div>

    </div>

       

       {/* Tool Icons */}
   <div className="overflow-hidden py-4 mt-[-24px]">
  <div className="flex justify-center gap-6 animate-slideIcons">
    <div className="flex gap-8 animate-marquee whitespace-nowrap">
      {[
        '/icons/Bootstrap.svg',
        '/icons/Docker.svg',
        '/icons/Express.png',
        '/icons/faa.svg',
        '/icons/Git.svg',
        '/icons/HTML.png',
        '/icons/Javascript.svg',
        '/icons/React.png',
        '/icons/Typescript.svg',
      ].flatMap((icon, i) => (
        <div
          key={`icon-${i}`}
          className="w-16 h-16 bg-black rounded-xl flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300"
        >
          <img src={icon} alt={`icon-${i}`} className="w-8 h-8" />
        </div>
      ))}

      {/* Duplicate icons for seamless loop */}
      {[
        '/icons/Bootstrap.svg',
        '/icons/Docker.svg',
        '/icons/Express.png',
        '/icons/faa.svg',
        '/icons/Git.svg',
        '/icons/HTML.png',
        '/icons/Javascript.svg',
        '/icons/React.png',
        '/icons/Typescript.svg',
      ].map((icon, i) => (
        <div
          key={`icon-duplicate-${i}`}
          className="w-16 h-16 bg-black rounded-xl flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300"
        >
          <img src={icon} alt={`icon-dup-${i}`} className="w-8 h-8" />
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </section>
  );
};
export default Hero;
