import React, { useContext } from 'react';
import { MyContext } from '../App';

function GameOver() {
  const { gameOver, currGuess, correctAnswer } = useContext(MyContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You guessed it!" : "Oh no, looks like you couldn't guess it :("}</h3>
      <h1>Correct word: {correctAnswer}</h1>
      {gameOver.guessedWord && (<h3>Attempts used: {currGuess.guess}</h3>)}
    </div>
  );
}

export default GameOver;
