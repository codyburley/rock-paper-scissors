import React from 'react';
import './Result.scss';
import rock from '../../assets/images/icon-rock.svg';
import paper from '../../assets/images/icon-paper.svg';
import scissors from '../../assets/images/icon-scissors.svg';

const Result = ({ playerChoice, houseChoice, setHouseChoice }) => {
  let playerIcon;
  let houseIcon;

  if (playerChoice === 'rock') {
    playerIcon = rock;
  }
  if (playerChoice === 'paper') {
    playerIcon = paper;
  }
  if (playerChoice === 'scissors') {
    playerIcon = scissors;
  }

  if (houseChoice === 'rock') {
    houseIcon = rock;
  }
  if (houseChoice === 'paper') {
    houseIcon = paper;
  }
  if (houseChoice === 'scissors') {
    houseIcon = scissors;
  }

  if (playerChoice) {

    console.log('House: ' + houseChoice)
    return (
      <section className='result'>
        <div className={`result__container result__container--${playerChoice}`} >
          <div className="result__wrapper">
            <img src={playerIcon} alt="Player choice" className="result__icon" />
          </div>
        </div>
        <div className={`result__container result__container--${houseChoice}`} >
          <div className="result__wrapper">
            <img src={houseIcon} alt="House choice" className="result__icon" />
          </div>
        </div>

      </section>
    )
  }
}

export default Result