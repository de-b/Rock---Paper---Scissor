import React, { useState } from 'react';
import './App.css';
import PlayerComponent from './components/PlayerComponent';
import checkWinner from './utils/checkWinner';
import generateRndNumber from './utils/generateRandomNumber';

function App() {
  const [gameState, setGameState] = useState({
    player1: 3,
    player2: 1,
    result: 'Click to play',
    switchState: false,
  });

  const handleRandomNumber = () => {
    const randomNum1 = generateRndNumber();
    const randomNum2 = generateRndNumber();

    const newResult = checkWinner(randomNum1, randomNum2);

    setGameState((previousState) => ({
      player1: randomNum1,
      player2: randomNum2,
      result: newResult,
      switchState: !previousState.switchState,
    }));
  };

  console.log('Hey react please RENDER......');
  return (
    <div className="pt-5 pb-3 game">
      <div className="container">
        <h1>{gameState.switchState ? 'ON' : 'OFF'}</h1>
        <div id="result" className="text-center h1 pb-5">
          {gameState.result}
        </div>
        <div className="row text-center">
          <PlayerComponent playerName="Player 1" value={gameState.player1} />
          <div className="col-md-4">
            <button
              className="btn btn-lg btn-light"
              id="play"
              onClick={handleRandomNumber}
            >
              <i className="fas fa-play"></i> Play
            </button>
          </div>
          <PlayerComponent playerName="Player 2" value={gameState.player2} />
        </div>
      </div>
    </div>
  );
}

export default App;
