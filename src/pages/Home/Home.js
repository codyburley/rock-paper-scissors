import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import Header from '../../components/Header/Header';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <GameBoard />
    </div>
  )
}

export default Home