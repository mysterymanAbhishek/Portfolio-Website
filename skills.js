import React from 'react'
import './skills.css';
import UIDesign from '../../asset/ui-design.png';
import WebDesign from '../../asset/website-design.png';
import AppDesign from '../../asset/app-design.png';
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I Do</span>
        <span className='skillDesc'>As a dedicated frontend developer, I specialize in building responsive,
          user-friendly web applications using modern technologies like HTML5,
          CSS3, JavaScript (ES6+), and React. I’m passionate about turning complex problems into engaging,
          pixel-perfect, and accessible solutions that enhance user experiences.</span>
          <div className='skillBars'>
            <div className='skillBar'>
              <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>This is a demo text, You can write your owm contect here.</p>
              </div>
            </div>
            <div className='skillBar'>
              <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>This is a demo text, You can write your owm contect here.</p>
              </div>
            </div>
            <div className='skillBar'>
              <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>App Design</h2>
                <p>This is a demo text, You can write your owm contect here.</p>
              </div>
            </div>
          </div>
    </section>
  );
}

export default Skills;