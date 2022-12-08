import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import RulesButton from '../../components/RulesButton/RulesButton';
import './Home.scss';
import useModal from '../../utility/useModal'

const Home = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className='home'>
      <Header />
      <GameBoard />
      <RulesButton
        toggle={toggle}
      />
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}

export default Home