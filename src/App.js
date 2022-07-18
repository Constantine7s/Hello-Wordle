import './App.css'; 
import Guesses from './Components/Guesses';
import Keyboard from './Components/Keyboard'

function App() {
  return (
    <div className="App"><nav><h1>Hello Wordle</h1></nav>
    <Guesses />
    <Keyboard />
    </div>
  );
}

export default App;
