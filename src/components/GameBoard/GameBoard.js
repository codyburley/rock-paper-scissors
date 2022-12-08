import React from 'react';
import './GameBoard.scss';
import rock from '../../assets/images/icon-rock.svg';
import paper from '../../assets/images/icon-paper.svg';
import scissors from '../../assets/images/icon-scissors.svg';

const GameBoard = () => {
  return (
    <section className='gameboard'>
      <div className="gameboard__container gameboard__container--paper">
        <div className="gameboard__wrapper">
          <img src={paper} alt="Paper" className="gameboard__icon" />
        </div>
      </div>
      <div className="gameboard__container gameboard__container--scissors">
        <div className="gameboard__wrapper">
          <img src={scissors} alt="Scissors" className="gameboard__icon" />
        </div>
      </div>
      <div className="gameboard__container gameboard__container--rock">
        <div className="gameboard__wrapper">
          <img src={rock} alt="Rock" className="gameboard__icon" />
        </div>
      </div>
    </section>
  )
}

export default GameBoard