import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="Logo" />
      <div className="header__score-container">
        <span className='header__score-title'>SCORE</span>
        <span className="header__score">12</span>
      </div>
    </header>
  )
}

export default Header