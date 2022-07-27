import './App.css';
import Guesses from './Components/Guesses';
import Keyboard from './Components/Keyboard';
import { createContext, useState } from 'react';
import { defaultGuesses } from './Words';

export const MyContext = createContext();

function App() {
  const [guesses, setGuesses] = useState(defaultGuesses);
  const [currGuess, setCurrGuess] = useState({guess: 0, letterPos: 0});
  const board = [...guesses];

  const onSelect = (val) => {
    if (currGuess.letterPos > 4) return;
    board[currGuess.guess][currGuess.letterPos] = val;
    setGuesses(board);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos + 1 });
  };

  const onEnter = () => {
    if (currGuess.letterPos !== 5) return;
    setCurrGuess({ guess: currGuess.guess + 1, letterPos: 0 });
  }

  const onDelete = () => {
    if (currGuess.letterPos === 0) return;
      board[currGuess.guess][currGuess.letterPos - 1] = '';
      setGuesses(board);
      setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos - 1 });
  }


  return (
    <div className="App">
      <nav>
        <h1>Hello Wordle</h1>
      </nav>
      <MyContext.Provider value={{ guesses, setGuesses, currGuess, setCurrGuess, onDelete, onEnter, onSelect}}>
        <section className="game">
          <Guesses />
          <Keyboard />
        </section>
      </MyContext.Provider>
    </div>
  );
}

export default App;
