import './App.css';
import Guesses from './Components/Guesses';
import Keyboard from './Components/Keyboard';
import { createContext, useState } from 'react';
import { defaultGuesses } from './Words';

export const MyContext = createContext();

function App() {
  const [guesses, setGuesses] = useState(defaultGuesses);
  const [currGuess, setCurrGuess] = useState({guess: 0, letterPos: 0});

  return (
    <div className="App">
      <nav>
        <h1>Hello Wordle</h1>
      </nav>
      <MyContext.Provider value={{ guesses, setGuesses, currGuess, setCurrGuess}}>
        <section className="game">
          <Guesses />
          <Keyboard />
        </section>
      </MyContext.Provider>
    </div>
  );
}

export default App;
