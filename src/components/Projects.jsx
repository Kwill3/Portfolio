import React from 'react';
import gifme from '../gifme.PNG';
import calc from '../js-calculator.PNG';
import tix from '../tix.PNG';
import space from '../space-daily.png';
import './Projects.css';

function Projects() {
  return (
    <div className='project-container'>
      <h1>Projects</h1>
      <div className='project-wrapper'>
        <div className='gallery'>
          <a href="https://kwill3.github.io/space-daily/">
            <img src={space} alt='space' className='image' />
            <div className='overlay'>
              <div className='desc'>
                Space Daily
              </div>
            </div>
          </a>
        </div>
        <div className='gallery'>
          <a href="https://kwill3.github.io/gifme/">
            <img src={gifme} alt='gifme' className='image' />
            <div className='overlay'>
              <div className='desc'>
                GIFME
              </div>
            </div>
          </a>
        </div>
        <div className='gallery'>
          <a href="https://kwill3.github.io/calculator/">
            <img src={calc} alt='calc' className='image' />
            <div className='overlay'>
              <div className='desc'>
                React Calculator
              </div>
            </div>
          </a>        
        </div>
        <div className='gallery'>
          <a href="https://codepen.io/Kwill3/pen/YBbgRv">
            <img src={tix} alt='tix' className='image' />
            <div className='overlay'>
              <div className='desc'>
                TIX Clock
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;