import React from 'react'
import {SkillsInfo} from '../../constant'

const Skills = () => {
    return (
    <section id = 'skills'
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans
    bg-gradient-to-b from-[#021B1A] via-[#032221] to-[#03624C] clip-path-custom'>
        
        {/**SKILLS Heading */}
        <div className='text-center mb-8'>
            <h2 className='text-2xl sm:text-3xl font-bold text-white'>SKILLS</h2>
            <div className="w-24 h-1 bg-[#00df81] mx-auto mt-2"></div>
            <p className='text-gray-300 mt-4 text-lg font-semibold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

    {/**Skills Category */}
        <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
          {SkillsInfo.map((category) => (
            <div
            key = {category.title}
            className='bg-transparent backfrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_black]'>
                <h3 className='text-2xl sm:text-3xl font-semibold text-[#00df81] mb-2 text-center'>
                    {category.title}
                </h3>
                <div className="w-24 h-1 bg-white mb-4 mx-auto mt-2"></div>
                {/**Skill Items */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 w-full'>
                    {category.skills.map((skill) => (
                        <div
                        key={skill.name}
                        className='flex items-center justify-center  bg-transparent border-2 border-none rounded-xl py-2 px-2 sm:py-2 text-center'>
                            <img src={`src/assets/${skill.logo}.png`} alt={skill.name} 
                            className='w-10 h-10 sm:w-12 sm:h-12 '/>
                            <span className='mx-2 text-xs sm:text-sm text-white font-bold'>
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
          ))}  
        </div>
    </section>
    )
}
export default Skills;