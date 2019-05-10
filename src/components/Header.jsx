import './Header.css';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import logo from '../icon.png';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu: false
    };
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    const show = (this.state.menu) ? 'show' : '';

    return (
      <nav className='navbar navbar-expand-sm navbar-dark header-container'>
        <button className='navbar-toggler mr-2' type='button' onClick={this.toggleMenu} >
          <span className='navbar-toggler-icon'></span>
        </button>
        <span className='navbar-brand d-flex flex-fill'>
          <NavLink to='/portfolio/' className='logo'>
            <img src={logo} alt="w-logo"/>
          </NavLink>
        </span>
        <div className={'collapse navbar-collapse ' + show}>
          <div className='navbar-nav justify-content-center d-flex flex-fill'>
            <NavLink className='nav-item nav-link' to='/portfolio/projects'>Projects</NavLink>
            <NavLink className='nav-item nav-link' to='/portfolio/about-me'>About Me</NavLink>
            <NavLink className='nav-item nav-link' to='/portfolio/contact'>Contact</NavLink>
          </div>
        </div>
        <div className="d-flex flex-fill"></div>
      </nav>
    );
  }
}

export default Header;
