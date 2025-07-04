import React, { useState } from 'react'
import { projects } from '../../constant';
import { FiX } from 'react-icons/fi';

const Projects = () => {

  const [ProjectOpen, setProjectOpen] = useState(null);

  const ProjectClick = (pro) => {
    setProjectOpen(pro);
  };


  return (
    <section id='project'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>

      {/**Section Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-2xl sm:text-3xl font-bold text-white'>PROJECTS</h2>
        <div className="w-24 h-1 bg-[#00df81] mx-auto mt-2"></div>
        < p className='text-gray-300 mt-4 text-lg font-semibold'>
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/**Detailed Section */}
      <div className='grid gap-12 grid-cols-1 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            onClick={() => (ProjectClick(project))}
            key={project.id}
            className='shadow-black border border-white backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-[#03624C] shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-700'>
            <div className='p-4'>
              <img
                className='w-full h-48 object-cover rounded-xl'
                src={`/assets/${project.image}.png`} alt={project.title} />
            </div>
            <div className='px-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-400 mb-4 line-clamp-3'>
                {project.description}
              </p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-[#00df81] text-xs font-semibold text-[rgb(2,27,26)] rounded-full px-2 py-1 mr-2 mb-2'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/**Detailed Container */}
        {ProjectOpen && (
          <div className="fixed inset-0 z-50 flex justify-center backdrop-blur-md bg-opacity-90 p-8">
            <div className="bg-[#AACBC4] rounded-xl shadow-2xl lg:w-full w-[70%] max-w-2xl overflow-y-scroll relative">
              <div className='flex justify-end pr-4 pt-2'>
                <button
                  onClick={() => (ProjectClick(null))}
                  className="text-white text-4xl font-bold hover:text-[#00df81]"
                >
                  &times;
                </button>
              </div>
              <div className='rounded-3xl flex justify-center p-4'>
                <img
                  className='rounded-2xl border-2 border-white'
                  src={`/assets/${ProjectOpen.image}.png`} alt="" />
              </div>
              <div className='px-8'>
                <h1 className='text-[#021B1A] text-2xl font-bold '>
                  {ProjectOpen.title}
                </h1>
                <p className='py-4 text-white'>
                  {ProjectOpen.description}
                </p>
                {ProjectOpen.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-[#00df81] text-xs font-semibold text-white rounded-full px-2 py-1 mr-2 mb-2'>
                    {tag}
                  </span>
                ))}
                <div className='flex justify-center mb-8 gap-8'>
                  <a href={ProjectOpen.webapp} target='_blank'
                    className='w-[50%] text-center text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-700 hover:scale-110'
                    style={{
                      background: '#03624C',
                      boxShadow: '0 0 2px rgb(2,27,26), 00 2px rgb(2,27,26)'
                    }}>
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>)}

      </div>
    </section>
  )
}
export default Projects;