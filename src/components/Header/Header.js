import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ score }) => {
  return (
    <header className='header'>
      <Link to={'/'}>
        <img className='header__logo' src={logo} alt="Logo" />
      </Link>
      <div className="header__score-container">
        <span className='header__score-title'>SCORE</span>
        <span className="header__score">{score}</span>
      </div>
    </header>
  )
}

export default Header