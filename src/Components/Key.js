import React, { useContext } from 'react';
import { MyContext } from '../App';

function Key({ val, big }) {
  const { guesses, setGuesses, currGuess, setCurrGuess } = useContext(MyContext);

  const chooseLetter = () => {
    const board = [...guesses];
    board[currGuess.guess][currGuess.letterPos] = val;
    setGuesses(board);
    setCurrGuess({...currGuess, letterPos: currGuess.letterPos + 1 });
  };
  return (
    <div className="key" id={big && 'big'} onClick={chooseLetter}>
      {val}
    </div>
  );
}

export default Key;
