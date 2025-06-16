import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]
    bg-[#03624C]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <div className='text-xl font-extrabold cursor-pointer'
          onClick={() => (handleScroll('about'))}>
          <span className="text-[#00DF81] ">Rak</span>
          <span className='text-white ' >Shit </span>
          <span className='text-[#00DF81] '>Jain</span>
        </div>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            /*{ name: "Experience", id: "experience" },*/
            { name: "Project", id: "project" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#00df81] font-semibold hover:scale-110 transition text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rakshit-jain-08866731a/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/rshit_11/" },
            { icon: <FaGithub />, link: "https://github.com/Rakshit200116" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#00df81] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-black mt-6">
          © 2025 Rakshit Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;