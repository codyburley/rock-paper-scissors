import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

const Header = ({ score }) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="Logo" />
      <div className="header__score-container">
        <span className='header__score-title'>SCORE</span>
        <span className="header__score">{score}</span>
      </div>
    </header>
  )
}

export default Header