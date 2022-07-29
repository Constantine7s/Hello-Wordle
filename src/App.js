import './App.css';
import Guesses from './Components/Guesses';
import Keyboard from './Components/Keyboard';
import GameOver from './Components/GameOver';
import { createContext, useEffect, useState } from 'react';
import { defaultGuesses, generateWordSet } from './Words';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyContext = createContext();

function App() {
  const [guesses, setGuesses] = useState(defaultGuesses);
  const [currGuess, setCurrGuess] = useState({ guess: 0, letterPos: 0 });
  const board = [...guesses];
  const [wordSet, setWordSet] = useState(new Set());
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  const [correctAnswer, setCorrectAnswer] = useState("")


  useEffect(() => {
    generateWordSet().then((set) => {
      setWordSet(set.allWords)
      setCorrectAnswer(set.wordOfTheDay.toUpperCase())
      console.log(set.wordOfTheDay)
    });

  }, []);

  const onSelect = (val) => {
    if (currGuess.letterPos > 4) return;
    board[currGuess.guess][currGuess.letterPos] = val;
    setGuesses(board);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos + 1 });
  };

  const onEnter = () => {
    if (currGuess.letterPos !== 5) return;
    let currWord = '';
    for (let i = 0; i < 5; i++) {
      currWord += board[currGuess.guess][i];
    }
    if (wordSet.has(currWord.toLocaleLowerCase())) {
      setCurrGuess({ guess: currGuess.guess + 1, letterPos: 0 });
    } else {
      toast.error('Not in word list', {
        position: 'top-center',
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    if (currWord === correctAnswer) {
      setGameOver({gameOver: true, guessedWord: true});
    }

    if (currGuess.guess === 5){
      setGameOver({gameOver: true, guessedWord: false});

    }
  };

  const onDelete = () => {
    if (currGuess.letterPos === 0) return;
    board[currGuess.guess][currGuess.letterPos - 1] = '';
    setGuesses(board);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos - 1 });
  };

  return (
    <div className="App">
      <nav>
        <h1>Hello Wordle</h1>
      </nav>
      <MyContext.Provider
        value={{
          guesses,
          setGuesses,
          currGuess,
          setCurrGuess,
          onDelete,
          onEnter,
          onSelect,
          correctAnswer,
          usedLetters,
          setUsedLetters,
          setGameOver,
          gameOver,
        }}
      >
        <section className="game">
          <Guesses />
          {gameOver.gameOver ? <GameOver/> : <Keyboard />}
        </section>
      </MyContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
