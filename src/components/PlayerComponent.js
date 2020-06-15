import React from 'react';

const ITEMS = {
  1: 'ROCK',
  2: 'PAPER',
  3: 'SCISSOR',
};

const PlayerComponent = ({ playerName, value }) => {
  return (
    <div className="col-md-4">
      <h1>{playerName}</h1>
      <h2>You Chose:</h2>
      <div className="resultbox" id="player1">
        <span>{ITEMS[value]}</span>
      </div>
    </div>
  );
};

export default PlayerComponent;
