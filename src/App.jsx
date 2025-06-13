import React from 'react'
import Skills from './components/skills/Skills'
import Navbar  from './components/navbar/navbar';
import About from './components/about/About';
import Exp from './components/experience/Exp';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BlurBlob from '../BlurBlob';

const App = () => {
  return(
    <div className='bg-[#021B1A]'>
        <BlurBlob position={{top : '35%',left:'20%'}} size = {{width:'30%',height : '40%'}}></BlurBlob>
        <div className='relative pt-20'>
            <Navbar/>
            <About/>
        </div>
    </div>
  );
};

export default App;