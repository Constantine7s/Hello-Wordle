import React, { useContext } from 'react';
import { MyContext } from '../App';

function Key({ val, big }) {
  const { guesses, setGuesses, currGuess, setCurrGuess } =
    useContext(MyContext);

  const chooseLetter = () => {
    const board = [...guesses];
    if (val === 'ENTER') {
      if (currGuess.letterPos !== 5) return;
      setCurrGuess({ guess: currGuess.guess + 1, letterPos: 0 });
    } else if (val === 'DELETE') {
      if (currGuess.letterPos === 0) return;
      board[currGuess.guess][currGuess.letterPos - 1] = '';
      setGuesses(board);
      setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos - 1 });
    } else {
      if (currGuess.letterPos > 4) return;
      board[currGuess.guess][currGuess.letterPos] = val;
      setGuesses(board);
      setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos + 1 });
    }
  };
  return (
    <div className="key" id={big && 'big'} onClick={chooseLetter}>
      {val}
    </div>
  );
}

export default Key;
