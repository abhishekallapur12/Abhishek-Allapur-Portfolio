import React from 'react';
import {
  Home,
  User,
  GraduationCap,
  FolderOpen,
  BadgeCheck,
} from 'lucide-react';
import './GooeyNav.css';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home', icon: <Home size={20} /> },
    { label: 'About', href: '#about', icon: <User size={20} /> },
    { label: 'Experience', href: '#experience', icon: <GraduationCap size={20} /> },
    { label: 'Projects', href: '#projects', icon: <FolderOpen size={20} /> },
    { label: 'Skills', href: '#skills', icon: <BadgeCheck size={20} /> },
  ];

  const scrollToSection = (href: string, target: HTMLSpanElement) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    triggerGooeyEffect(target);
  };

  const triggerGooeyEffect = (container: HTMLSpanElement) => {
    const particleCount = 10;
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('span');
      particle.className = 'gooey-particle';
      const angle = Math.random() * 2 * Math.PI;
      const distance = 20 + Math.random() * 20;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      particle.style.setProperty('--x', `${x}px`);
      particle.style.setProperty('--y', `${y}px`);
      particle.style.animationDelay = `${Math.random() * 0.2}s`;

      container.appendChild(particle);

      setTimeout(() => {
        container.removeChild(particle);
      }, 600);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <nav className="bg-white/5 border border-white/10 backdrop-blur-md px-2 sm:px-4 py-2 sm:py-3 rounded-full flex-nowrap flex overflow-x-auto no-scrollbar items-center gap-2 sm:gap-3 shadow-xl max-w-[95vw] sm:max-w-max">
        {navItems.map((item, idx) => (
          <button
  key={idx}
  onClick={(e) =>
    scrollToSection(item.href, e.currentTarget.querySelector('.gooey-container') as HTMLSpanElement)
  }
  className="group relative overflow-visible flex items-center gap-2 text-white/80 hover:text-white px-2 sm:px-4 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 transition-all duration-300"
>
  {/* Directly animating the Lucide icon */}
  {React.cloneElement(item.icon, {
    className:
      'transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-white',
  })}

  {/* Label text */}
  <span className="overflow-hidden whitespace-nowrap opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 text-xs sm:text-sm font-medium">
    {item.label}
  </span>

  {/* Gooey effect container */}
  <span className="gooey-container absolute inset-0 pointer-events-none" />
</button>

        ))}
      </nav>
    </header>
  );
};

export default Header;
