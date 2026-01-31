import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const boxesRef = useRef<HTMLDivElement[]>([]);

  const education = [
    {
      year: '2022 - Present',
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Alvas Institute of Engineering and Technology',
      location: 'Mangalore, India',
      description: 'Specializing in full-stack development and cloud computing. Worked on multiple capstone projects involving AI and distributed systems.'
    },
    {
      year: '2020 - 2023',
     
      institution: 'SBR PU College',
      location: 'Kalaburgi, India',
      degree: 'Pre-University Course',},
    {
      year: '2018 - 2020',
      degree: 'Higher Secondary Education',
      institution: 'SBR Res School',
      location: 'Kalaburgi, India',
      }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-n-out');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    boxesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el!)}
              className="relative flex items-start mb-12 last:mb-0 group transition-transform duration-700"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-8 border border-white/20 group-hover:border-white/40 transition-colors">
                <GraduationCap size={20} className="text-white/80" />
              </div>

              {/* Content */}
              <div
  className={`flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
              transition-transform duration-700 ease-in-out
              group-hover:border-white/40
              hover:shadow-[0px_15px_40px_rgba(0,0,0,0.3)]
              hover:scale-[1.02]
              hover:rotate-[1deg] hover:-skew-y-2
              hover:border-gradient
              animate-border-glow`}
>


                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                  <div className="flex items-center text-gray-400 text-sm mt-1 md:mt-0">
                    <Calendar size={14} className="mr-1" />
                    {edu.year}
                  </div>
                </div>

                <div className="flex items-center text-gray-300 mb-3">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {edu.location}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
