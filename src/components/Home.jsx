import React from 'react';
import './Home.css';

import html from '../html5.png';
import css from '../css.png';
import js from '../javascript.png';
import es6 from '../es6.jpeg';
import reactIcon from '../react.png';
import jqIcon from '../jquery.png';
import github from '../github.png';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-wrapper'>
        <h1 className='name'>William Lee</h1>
        <h2 className='title'>Front-End Software Developer</h2>
        <div>
          <div className='icons-wrapper'> 
            Experience with:
            <img src={html} alt="html" className='icons'/>
            <img src={css} alt="css" className='icons'/>
            <img src={js} alt="js" className='icons'/>
            <img src={es6} alt="js" className='icons'/>
          </div>
          <div className='icons-wrapper'>
            Frameworks/Libraries:
            <img src={reactIcon} alt="react" className='icons'/>
            <img src={jqIcon} alt="jquery" className='icons'/>
          </div>
          <div className='icons-wrapper'>
            Version Control:
            <img src={github} alt="github" className='icons'/>
          </div>
        </div>
      </div>
      <div className='home-footer'>
        Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a>/<a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0">CC 3.0 BY</a>
      </div>
    </div>
  );
}

export default Home;