import React from 'react'
import './contact.css';
import Walmart from '../../asset/walmart.png';
import Adobe from '../../asset/adobe.png';
import Microsoft from '../../asset/microsoft.png';
import Facebook from '../../asset/facebook.png';
import FacebookIcon from '../../asset/facebook-icon.png';
import TwitterIcon from '../../asset/twitter.png'
import YouTubeIcon from '../../asset/youtube.png'
import InstragramIcon from '../../asset/instragram.png'
const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                 i hace had the opportunity to work with a diverse group of companies.
                 some of the notable companies I have worked with includes.
            </p>
            <div className='clientImgs'>
                <img src= {Walmart} alt='Client' className='clientImg'/>
                <img src= {Adobe} alt='Client' className='clientImg'/>
                <img src= {Microsoft} alt='Client' className='clientImg'/>
                <img src= {Facebook} alt='Client' className='clientImg'/>
            </div>
            <div id='contact'>
              <h1 contactPageTitle>Contact me</h1>
              <span className='contactDesc'> please fill out the form below to discuss any work opprtunities</span>
              <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email'className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='10' placeholder='your Message'></textarea>
                <button type='submit' value="send" className='submitBtn'>Submit</button>
                <div className='links'>
                  <img src={FacebookIcon} alt='Facebook' className='link'/>
                  <img src={TwitterIcon} alt='twitter' className='link'/>
                  <img src={YouTubeIcon} alt='Youtube' className='link'/>
                  <img src={InstragramIcon} alt='Instragram' className='link'/>
                </div>
              </form>
            </div>
        </div>
    </section>
  );
}

export default Contact;