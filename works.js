import React from 'react';
import './works.css';
import Portfolio1 from '../../asset/portfolio-1.png';
import Portfolio2 from '../../asset/portfolio-2.png';
import Portfolio3 from '../../asset/portfolio-3.png';
import Portfolio4 from '../../asset/portfolio-4.png';
import Portfolio5 from '../../asset/portfolio-5.png';
import Portfolio6 from '../../asset/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my works is pixel perfect and user friendly,I am excited to bring my skills and experince to help business achieve thier goals and a strong online presense</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/>
            <img src={Portfolio2} alt='' className='worksImg'/>
            <img src={Portfolio3} alt='' className='worksImg'/>
            <img src={Portfolio4} alt='' className='worksImg'/>
            <img src={Portfolio5} alt='' className='worksImg'/>
            <img src={Portfolio6} alt='' className='worksImg'/>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works;