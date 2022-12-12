import React, { useEffect, useState } from 'react';
import './Result.scss';
import { Link } from 'react-router-dom';

const Result = ({ score, playerChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (playerChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (playerChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (playerChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (playerChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (playerChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (playerChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
          setCounter(counter - 1);
        }, 1000)
        : Result();
    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <section className="result">
      <div className="result__player-container">
        <h2 className="result__title">You Picked</h2>
        <div
          className={`result__icon result__icon--${playerChoice} 
          ${playerWin === "win" ? `result__icon result__icon--${playerChoice}--winner` : ""
            }`}
        ></div>
      </div>
      <div className="result__house">
        <h2 className="result__title">The House Picked</h2>
        {counter === 0 ? (
          <div
            className={`result__icon result__icon--${house} ${playerWin === "lose" ? `result__icon result__icon--${house} result__icon--winner` : ""
              }`}
          ></div>
        ) : (
          <div className="result__counter">{counter}</div>
        )}
      </div>
      <div className="result__play">
        {!playerWin && (<div className='result__spacer'></div>)}
        {playerWin === "win" && (<span className="result__text">You Win</span>)}
        {playerWin === "lose" && (<span className="result__text">You Lose</span>)}
        {playerWin === "draw" && (<span className="result__text">Draw</span>)}
        <Link to="/" className="result__play-again" onClick={() => setHouse()}>
          Play Again
        </Link>
      </div>
    </section>
  );
};

export default Result