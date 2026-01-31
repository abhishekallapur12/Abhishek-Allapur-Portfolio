import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const socialIcons = [
  { Icon: FaFacebookF, label: "Facebook", link: "https://facebook.com" },
  { Icon: FaTwitter, label: "Twitter", link: "https://twitter.com" },
  { Icon: FaInstagram, label: "Instagram", link: "https://instagram.com" },
  { Icon: FaLinkedinIn, label: "LinkedIn", link: "https://linkedin.com" },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-20 mt-20 border-t border-gray-800">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Let's build something together</h2>
        <p className="text-gray-400 mb-6">
          Open to freelance, collaboration or full-time opportunities.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
        >
          Contact Me
        </a>
      </div>

      {/* Centered Socials Section */}
      <div className="text-center mt-10">
        <h4 className="text-white font-semibold mb-3">Socials</h4>
        <div className="overflow-hidden w-full flex justify-center">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...socialIcons, ...socialIcons].map(({ Icon, label, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
              >
                <Icon className="text-white text-xl hover:text-blue-500 transition transform hover:scale-125" />
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition-all duration-300 shadow-lg">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Abhishek Allapur.
      </div>
    </footer>
  );
};

export default Footer;
