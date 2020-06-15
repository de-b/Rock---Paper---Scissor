const checkWinner = (value1, value2) => {
  if (value1 === 1) {
    if (value2 === 2) {
      return 'PLAYER 2 WINS - PAPER WINS AND PLAYER 1 ROCK LOSE';
    }
    if (value2 === 3) {
      return 'PLAYER 1 WINS - ROCK WINS AND PLAYER 2 SCISSOR LOSE';
    }
  }

  if (value1 === 2) {
    if (value2 === 1) {
      return 'PLAYER 1 WINS - PAPER WINS AND PLAYER 2 ROCK LOSE';
    }
    if (value2 === 3) {
      return 'PLAYER 2 WINS SCISSOR WINS AND PLAYER 1 PAPER LOSE';
    }
  }

  if (value1 === 3) {
    if (value2 === 1) {
      return 'PLAYER 2 WINS ROCK AND PLAYER 1 SCISSOR LOSE';
    }
    if (value2 === 2) {
      return 'PLAYER 1 WINS SCISSOR WINS AND PLAYER 2 PAPER LOSE';
    }
  }

  if (value1 === value2) {
    return 'DRAW';
  }
};

export default checkWinner;
