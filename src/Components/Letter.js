import React, { useContext } from 'react';
import { MyContext } from '../App';

function Letter({ letterPosition, guessValue }) {
  const { guesses } = useContext(MyContext);
  const letter = guesses[letterPosition][guessValue];
  return <div className="letter">{letter}</div>;
}

export default Letter;
