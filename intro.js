import React from 'react'
import './intro.css'
import bg from '../../asset/image.png';
import btnImg from '../../asset/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Abhishek</span><br/>Front-End Developer</span>
            <p className='intropara'>I am a skilled Front-End Developer with experince in creating <br/> visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me'className="btnImg"/>Hire me</button></Link>

        </div>
        <img src={bg} alt='Profile' className='bg'/>

    </section>
  )
}

export default Intro;