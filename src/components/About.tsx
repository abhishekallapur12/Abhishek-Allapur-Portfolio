import React from 'react';
import ProfileCard from './ProfileCard';
import { Linkedin, Github, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
<section
  id="about"
  className="min-h-screen pt-24 sm:pt-32 flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
>
  <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
    
    {/* LEFT SIDE - TEXT CONTENT */}
    <div>
      <p className="text-xs sm:text-sm uppercase text-gray-400 tracking-wide mb-3 sm:mb-4">
        More About Me
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight mb-5 sm:mb-6 text-white">
        I'm Abhishek, a creative{' '}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent italic">
          engineer
        </span>
      </h2>

      <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
        I'm Abhishek Allapur, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
      </p>

      <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
        When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
      </p>

      <p className="text-gray-300 mb-6 text-base sm:text-lg">
        I believe in waking up each day eager to make a difference!
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex space-x-4 mt-4 sm:mt-6">
        <a href="#" className="text-gray-400 hover:text-white transition">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <Github size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <Twitter size={20} />
        </a>
      </div>
    </div>

        {/* RIGHT SIDE - PROFILE CARD */}
     <div className="relative flex items-center justify-center md:justify-end">
  <div className="absolute inset-0 pc-icon-pattern z-0"></div>
  <div className="z-10">
    <ProfileCard
      name="Abhishek Allapur"
      title="Full Stack Developer"
      handle="abhicodes"
      status="Online"
      contactText="Let's Talk"
      avatarUrl="/ssss.png"
      showUserInfo={true}
      enableTilt={true}
      onContactClick={() => console.log('Contact clicked')}
    />
  </div>
</div>
</div>
    </section>
  );
};

export default About;
