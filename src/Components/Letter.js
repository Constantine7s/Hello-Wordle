import React, { useContext, useEffect } from 'react';
import { MyContext } from '../App';

function Letter({ letterPosition, guessValue }) {
  const { guesses, correctAnswer, currGuess, usedLetters, setUsedLetters } = useContext(MyContext);
  const letter = guesses[guessValue][letterPosition];

  const correct = correctAnswer[letterPosition] === letter
  const almost = !correct && letter !== "" && correctAnswer.includes(letter)
  const letterId = currGuess.guess > guessValue && ( correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (!correct && letter !== "" && !almost ){
      setUsedLetters((currUsed)=>[...currUsed, letter])
    }
  },[currGuess.guess])

  return <div className="letter" id={letterId}>{letter}</div>;
}

export default Letter;
