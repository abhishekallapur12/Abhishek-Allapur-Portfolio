import React, { useEffect } from "react";
import "./Projects.css"; // Your external CSS for styles (copied from your previous CSS)
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "project1",
    number: "01",
    title: "Hawk Aerosystem",
    description:
      "A frontend clone of Razorpay, a popular online payment gateway. The primary goal of this project was to replicate the user interface and key functionalities of Razorpay on the frontend.",
    skills: ["HTML.png", "CSS.png", "Javascript.svg", "Tailwind.png", "Vercel.svg"],
    live: "https://www.hawkaerosystem.co.uk/",
    github: "https://github.com/abhishekallapur12/Web-OS",
    bgImage: "/image.png",
  },
  {
    id: "project2",
    number: "02",
    title: "WEB-OS",
    description:
      "A frontend replica of the popular communication platform. Experience the familiar layout, sleek design, and responsive elements.",
    skills: ["HTML.png", "CSS.png", "Javascript.svg", "Tailwind.png", "Vercel.svg"],
    live: "https://web-os-one-iota.vercel.app/",
    github: "https://github.com/abhishekallapur12/Web-OS",
    bgImage: "/12.png",
  },
  {
    id: "project3",
    number: "03",
    title: "CARCARE",
    description: "A Website to generate Strong Passwords.",
    skills: ["HTML.png", "CSS.png", "Javascript.svg", "Tailwind.png", "Vercel.svg"],
    live: "",
    github: "https://github.com/abhishekallapur12",
    bgImage: "/pr4.png",
  },
  {
    id: "project4",
    number: "04",
    title: "Online Bid",
    description:
      "A architectural website to plan your building or home (Hebrew Language)",
    skills: ["/HTML.png",],
    live: "",
    github: "https://github.com/abhishekallapur12",
    bgImage: "/pr3.png",
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".projectCard");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("hovered");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered");
      });
    });
  }, []);

  return (
    <section id="projects" className="projectSection">
      <div className="outerSectionDiv">
     <h2
  className="projectTitle text-white font-bold text-5xl md:text-7xl lg:text-8xl text-center mx-auto glitch animate-float "
  data-text="Projects"
  style={{ textShadow: '2px 2px #ff00c8, -2px -2px #00fff2' }}
>
  Projects
</h2>


        <div className="projectContainer">
          {projects.map((project, index) => (
            <div
              className="projectCard hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-500 "
              id={project.id}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div
                className={`projectNumber ${index % 2 === 0 ? "rightNumber" : "leftNumber"}`}
              >
                {project.number}
              </div>
              <div
                className={`projectContent ${
                  index % 2 === 0 ? "leftProjectContent" : "rightProjectContent"
                }`}
              >
                <div className="projectSkillsContainer">
                  {project.skills.map((skill, i) => (
                    <img
                      key={i}
                      className="projectSkill"
                      src={`/stack/${skill}`}
                      alt={skill}
                    />
                  ))}
                </div>
                <h2 className="projectHeading">{project.title}</h2>
                <p className="projectSubHeading">{project.description}</p>
                <div className="btnGroup">
                  <a href={project.live} target="_blank">
                    <button className="projectBtn">LIVE LINK</button>
                  </a>
                  <a href={project.github} className="github" target="_blank">
                    <FaGithub className="icon" title="GitHub Link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
