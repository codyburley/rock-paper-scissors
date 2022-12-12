import GameBoard from '../../components/GameBoard/GameBoard';
import './Home.scss';

const Home = ({ setPlayerChoice }) => {

  return (
    <div className='home'>
      <GameBoard setPlayerChoice={setPlayerChoice} />
    </div>
  )
}

export default Home