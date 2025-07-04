import React from 'react'
import Skills from './components/skills/Skills'
import NavBar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BlurBlob from '../BlurBlob';

const App = () => {
  return (
    <div className='bg-[#021B1A]'>
      <BlurBlob position={{ top: '50%', left: '30%' }} size={{ width: '30%', height: '60%' }}></BlurBlob>

      <div className='relative pt-20 md:pt-10'>
        <NavBar />
        <About />
        <Skills />
        {/**<Exp/> */}
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;