import React from 'react';
import './GameBoard.scss';
import { Link } from 'react-router-dom';

const GameBoard = ({ setPlayerChoice }) => {
  const setChoice = (e) => {
    setPlayerChoice(e.target.dataset.id);
  };

  return (
    <section className='gameboard'>
      <Link to="/result">
        <div
          data-id="paper"
          onClick={setChoice}
          className="gameboard__icon gameboard__icon--paper"
        ></div>
      </Link>
      <Link to="/result">
        <div
          data-id="scissors"
          onClick={setChoice}
          className="gameboard__icon gameboard__icon--scissors"
        ></div>
      </Link>
      <Link to="/result">
        <div
          data-id="rock"
          onClick={setChoice}
          className="gameboard__icon gameboard__icon--rock"
        ></div>
      </Link>
    </section>
  )
}


export default GameBoard