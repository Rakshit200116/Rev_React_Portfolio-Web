import React, { useEffect, useState } from 'react'
import { FiX, FiList, FiMenu } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () => {

  const [isOpen, setisOpen] = useState(false);
  const [activeSection, setactiveSection] = useState("");
  const [isScrolling, setisScrolled] = useState(false);

  const NavMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setactiveSection(sectionId);
    setisOpen(false);
  }

  useEffect(() => {

    const handScroll = () => (
      setisScrolled(window.scrollY > 100)
    );

    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  }, []);

  const NavItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    /** { id: "experience", label: "Experience" }, */
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className={`fixed md:sticky top-0 w-full z-50 transition duration-00 px-[7vw] lg:px-[20vw] ${isScrolling ? "bg-[rgba(2,27,26,0.5)] bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}>
      <div className={`${isOpen ? "w-full bg-[rgba(2,27,26,.5)]" : "bg-transparent"}`}>
        <div className='text-white py-5 flex justify-between items-center'>

          {/* Logo */}
          <div className='text-xl font-extrabold cursor-pointer'
            onClick={() => (NavMenuClick('about'))}>
            <span className="text-[#00DF81] ">Rak</span>
            <span className='text-white ' >Shit </span>
            <span className='text-[#00DF81] '>Jain</span>
          </div>

          {/* NavBar Menu */}
          <ul className='hidden md:flex text-gray-300 space-x-8'>
            {NavItems.map((item) => (
              <li onClick={() => NavMenuClick(item.id)}
                key={item.id}
                className={`font-semibold cursor-pointer hover:text-[#00DF81] transition-transform duration-300 hover:scale-110 ${activeSection === item.id ? "scale-110 text-[#00DF81]" : ""}`}>
                {item.label}
              </li>
            ))}
          </ul>

          {/*Social Media Icons */}
          <div className='hidden md:flex space-x-4'>
            <a className='text-gray-300 hover:text-[#00df81] transition duration-300 hover:scale-110' target='_black' href="https://github.com/Rakshit200116">
              <FaGithub size={24} />
            </a>
            <a className='text-gray-300 hover:text-[#00df81] transition duration-300 hover:scale-110' target='_black' href="https://www.linkedin.com/in/rakshit-jain-08866731a/">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/*Mobile NavButtons */}
          <div className='md:hidden '>
            {isOpen ? (
              <FiX className='cursor-pointer text-3xl text-[#00df81] curson-pointer'
                onClick={() => setisOpen(false)} />
            ) : (<FiMenu className='cursor-pointer text-3xl text-[#00df81] curson-pointer'
              onClick={() => setisOpen(true)} />
            )
            }
          </div>
        </div>
      </div>

      {/*Mobile NavBar */}
      {isOpen && (
        <div className=' absolute top-16 left-1/2 transform -translate-x-1/2 w-12/14 bg-[rgba(2,27,26,0.5)] bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-3'>
          <ul className='flex flex-col items-center space-y-4 text-gray-300'>
            {NavItems.map((item) => (
              <li onClick={() => NavMenuClick(item.id)} key={item.id} className={`cursor-pointer font-semibold hover:text-[#00df81] transition duration-700 hover:scale-110 
              ${activeSection === item.id ? "text-[#00df81]" : ""}`}>
                {item.label}
              </li>
            ))}
          </ul>

          {/*Social Media Icons */}
          <div className='flex justify-center pt-4 space-x-4'>
            <a className='text-gray-300 hover:text-[#00df81] transition duration-700 hover:scale-110' target='_black' href="https://github.com/Rakshit200116">
              <FaGithub size={24} />
            </a>
            <a className='text-gray-300 hover:text-[#00df81] transition duration-700 hover:scale-110' target='_black' href="https://www.linkedin.com/in/rakshit-jain-08866731a/">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>)}

    </nav>
  )
};

export default NavBar;