import React from 'react';
import phone from '../smartphone.png';
import email from '../gmail.png';
import github from '../github.png';
import linkedin from '../linkedin.png';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-wrapper'>
        <a href="tel:+447827758036">
          <img src={phone} alt="tel" className='icon' />
          <p>+44-07827758036</p>
        </a>
        <a href="mailto:karlweiyang@gmail.com">
          <img src={email} alt="email" className='icon' />
          <p>karlweiyang@gmail.com</p>
        </a>
        <a href="https://github.com/Kwill3">
          <img src={github} alt="github" className='icon' />
          <p>GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/wei-yang-lee-a3222689/">
          <img src={linkedin} alt="linkedin" className='icon' />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className='footer'>
        Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>/<a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>/<a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a>/<a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
      </div>
    </div>
  );
}

export default Contact;