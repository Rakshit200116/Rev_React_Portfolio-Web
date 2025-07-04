import React from 'react'
import { education } from '../../constant';


const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-[#021B1A] to to-[#095544] py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans clip-path-custom-1"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#00df81] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[#00df81] h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md py-4 sm:py-8 rounded-2xl border border-white bg-[#AACBC4] backdrop-blur-md shadow-[0_0_20px_1px_rgba(0,0,0,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } lg:ml-15 lg:mr-14 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className={`flex items-center space-x-6 bg-[#f1f7f6] px-8 py-2 `}>
                {/* School Logo/Image */}
                <div className="w-35 h-27 flex justify-center items-center overflow-hidden">
                  <img
                    src={`/assets/${edu.img}.png`}
                    alt={edu.school}
                    className="w-auto h-auto object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-[#021B1A]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-[#03624C] font-semibold">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-[#00df81]">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-[#0B453A] font-bold px-4 sm:px-8 ">Grade: {edu.grade}</p>
              <p className="mt-4 text-white px-4 sm:px-8 ">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Education;