import './App.css';
import Guesses from './Components/Guesses';
import Keyboard from './Components/Keyboard';
import { createContext, useState } from 'react';
import { defaultGuesses } from './Words';


export const MyContext = createContext();

function App() {
  const [guesses, setGuesses] = useState(defaultGuesses)
  return (
    <div className="App">
      <nav>
        <h1>Hello Wordle</h1>
      </nav>
      <MyContext.Provider value={{guesses, setGuesses}}>
        <Guesses />
        <Keyboard />
      </MyContext.Provider>
    </div>
  );
}

export default App;
