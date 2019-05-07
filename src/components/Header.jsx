import './Header.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../icon.png';

function Header() {
  return (
    <div className='header-container'>
      <NavLink to='/portfolio/contact'>Contact</NavLink>
      <NavLink to='/portfolio/about-me'>About Me</NavLink>
      <NavLink to='/portfolio/projects'>Projects</NavLink>
      <NavLink to='/portfolio/'>Home</NavLink>
      <a href='/portfolio/' className='logo' >
        <img src={logo} alt="w-logo"/>
      </a>
    </div>
  );
}

export default Header;
