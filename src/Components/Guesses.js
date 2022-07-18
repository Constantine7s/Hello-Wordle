import React, { useState } from 'react';
import { defaultGuesses } from '../Words';
import Letter from './Letter';

export default function Guesses() {
  const [guesses, setGuesses] = useState(defaultGuesses);

  return (
    <div className="guesses">
      <div className="row">
        <Letter letterPosition={0} guessValue={0} />
        <Letter letterPosition={1} guessValue={0} />
        <Letter letterPosition={2} guessValue={0} />
        <Letter letterPosition={3} guessValue={0} />
        <Letter letterPosition={4} guessValue={0} />
      </div>
      <div className="row">
        <Letter letterPosition={0} guessValue={1} />
        <Letter letterPosition={1} guessValue={1} />
        <Letter letterPosition={2} guessValue={1} />
        <Letter letterPosition={3} guessValue={1} />
        <Letter letterPosition={4} guessValue={1} />
      </div>
      <div className="row">
        <Letter letterPosition={0} guessValue={2} />
        <Letter letterPosition={1} guessValue={2} />
        <Letter letterPosition={2} guessValue={2} />
        <Letter letterPosition={3} guessValue={2} />
        <Letter letterPosition={4} guessValue={2} />
      </div>
      <div className="row">
        {' '}
        <Letter letterPosition={0} guessValue={3} />
        <Letter letterPosition={1} guessValue={3} />
        <Letter letterPosition={2} guessValue={3} />
        <Letter letterPosition={3} guessValue={3} />
        <Letter letterPosition={4} guessValue={3} />
      </div>
      <div className="row">
        <Letter letterPosition={0} guessValue={4} />
        <Letter letterPosition={1} guessValue={4} />
        <Letter letterPosition={2} guessValue={4} />
        <Letter letterPosition={3} guessValue={4} />
        <Letter letterPosition={4} guessValue={4} />
      </div>
      <div className="row">
        <Letter letterPosition={0} guessValue={5} />
        <Letter letterPosition={1} guessValue={5} />
        <Letter letterPosition={2} guessValue={5} />
        <Letter letterPosition={3} guessValue={5} />
        <Letter letterPosition={4} guessValue={5} />
      </div>
    </div>
  );
}
