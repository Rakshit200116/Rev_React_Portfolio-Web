import React from 'react'
import { SkillsInfo } from '../../constant'

const Skills = () => {
    return (
        <section id='skills'
            className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans
    bg-gradient-to-b from-[#021B1A] to-[#063028] clip-path-custom'>

            {/**SKILLS Heading */}
            <div className='text-center mb-8'>
                <h2 className='text-2xl sm:text-3xl font-bold text-white'>SKILLS</h2>
                <div className="w-24 h-1 bg-[#00df81] mx-auto mt-2"></div>
                <p className='text-gray-300 mt-4 text-lg font-semibold'>
                    The skills, tools and technologies I use to bring your products to life:                </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 justify-items-center mt-10">
                {SkillsInfo.map((category) => (
                    <div key={category.id}>
                        <img
                            className='h-15 sm:h-20 hover:animate-spin'
                            src={`src/assets/${category.logo}`} alt="" />
                        <div>
                            <h3 key={category.id}
                                className='text-center mt-2 text-[#00df81] font-bold'>
                                {category.name}
                            </h3>
                        </div>
                    </div>
                ))

                }
            </div>



        </section>
    )
}
export default Skills;