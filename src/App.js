import './App.scss';
import HomePage from './pages/Home/Home';
import Header from './components/Header/Header';
import ResultPage from './pages/Result/Result';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import useModal from './utility/useModal';
import Modal from './components/Modal/Modal';
import RulesButton from './components/RulesButton/RulesButton';


function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const { isShowing, toggle } = useModal();

  console.log(score)

  return (
    <div className="App">
      <Header
        score={score}
      />
      <Routes>
        <Route path='/'
          element={
            <HomePage
              setPlayerChoice={setPlayerChoice}
            />}
        />
        <Route path='/result'
          element={
            <ResultPage
              score={score}
              setScore={setScore}
              playerChoice={playerChoice}
            />}
        />
      </Routes>
      <RulesButton
        toggle={toggle}
      />
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
}

export default App;
