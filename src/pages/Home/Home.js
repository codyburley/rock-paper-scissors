import { useEffect, useState } from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import RulesButton from '../../components/RulesButton/RulesButton';
import './Home.scss';
import useModal from '../../utility/useModal'
import Result from '../../components/Result/Result';

const Home = () => {
  const { isShowing, toggle } = useModal();
  const [playerChoice, setPlayerChoice] = useState('')
  const [score, setScore] = useState(0);
  const [houseChoice, setHouseChoice] = useState('');

  const choices = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
  }

  useEffect(() => {
    let rand = Math.floor(Math.random() * 3) + 1;
    setHouseChoice(choices[rand])
  }, [])


  return (
    <div className='home'>
      <Header
        score={score}
      />
      <GameBoard
        setPlayerChoice={setPlayerChoice}
        playerChoice={playerChoice}
      />
      <Result
        playerChoice={playerChoice}
        houseChoice={houseChoice}
        setHouseChoice={setHouseChoice}
      />
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