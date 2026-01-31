import React from "react";
import "./Projects.css"; // Ensure this contains your custom styles

const skillIcons = [
  "/stack/HTML.png",
  "/stack/CSS.png",
  "/stack/Javascript.svg",
  "/stack/React.png",
  "/stack/NodeJs.svg",
  "/stack/Tailwind.png",
  "/stack/Bootstrap.svg",
  "/stack/Express.png",
  "/stack/Git.svg",
  "/stack/MongoDB.svg",
  "/stack/Vercel.svg",
  "/stack/Docker.svg",
  "/stack/Github.svg",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skillSection w-full bg-black text-white px-3 pt-24 pb-20 flex flex-col items-center"
    >
      {/* Centered Heading */}
      <h2
        data-text="MyTech Stack"
        className="text-center text-[72px] md:text-[80px] lg:text-[96px] font-extrabold text-white relative inline-block glitch animate-float leading-tight mb-8"
        style={{ textShadow: "2px 2px #ff00c8, -2px -2px #00fff2" }}
      >
        MyTech Stack
      </h2>

    <div className="skillContainer -mt-6">
  {/* Video Section */}
  <div className="space2 mt-0">
    <video autoPlay muted loop className="w-[300px] sm:w-[400px] md:w-[500px]">
      <source src="/stack/cards-video.webm" type="video/webm" />
    </video>
  </div>

  {/* Skills Icons Grid */}
  <div className="w-full flex justify-center mt-2">
    <div className="flex flex-wrap justify-center gap-8 max-w-[1000px] px-4">
      {skillIcons.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`skill-${index}`}
          className="w-14 h-14 sm:w-16 sm:h-16 skillsLogo hover:scale-110 transition-transform duration-500"
        />
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default Skills;
