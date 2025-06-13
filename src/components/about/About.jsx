import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/*Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-8'>
          {/*Greetings */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-0.5 leading-10'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Rakshit Jain
          </h2>

          {/*Typing Effect */}
          <h3 className='text-xl sm:texxt-2xl md:text-3xl font-bold mb-4 text-[#00df81] leading-tight'>
            <span className='text-white'>I am a </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'IITian',
                1000,
                'Full Stack Developer',
                1000,
                'Physicist',
                1000,
                'Tech Enthusiast',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>

          {/**About me para */}
          <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            A quis, nisi earum optio ipsum incidunt nostrum, quod re
            pellendus est accusantium natus blanditiis tempora
            fugiat cumque necessitatibus consectetur repudiandae
            impedit omnis.
          </p>

          {/**Resume Button */}
          <a href="" target='_blank'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-700 hover:scale-110'
            style={{
              background: '#03624C',
              boxShadow: '0 0 2px rgb(2,27,26), 00 2px rgb(2,27,26), 0 0 40px black'
            }}>
            DOWNLOAD CV
          </a>
        </div>

        {/**Right Side time Stamp : 1.04.55 */}
      </div>
    </section>
  )
}
export default About;
