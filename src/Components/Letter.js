import React, { useContext } from 'react';
import { MyContext } from '../App';

function Letter({ letterPosition, guessValue }) {
  const { guesses, correctAnswer, currGuess } = useContext(MyContext);
  const letter = guesses[guessValue][letterPosition];

  const correct = correctAnswer[letterPosition] === letter
  const almost = !correct && letter !== "" && correctAnswer.includes(letter)
  const letterId = currGuess.guess > guessValue && ( correct ? "correct" : almost ? "almost" : "error");

  return <div className="letter" id={letterId}>{letter}</div>;
}

export default Letter;
