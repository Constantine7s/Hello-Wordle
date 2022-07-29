import React, { useCallback, useEffect, useContext } from 'react';
import Key from './Key';
import { MyContext } from '../App';

function Keyboard() {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const { onDelete, onEnter, onSelect, usedLetters } = useContext(MyContext);

  const handleInput = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      const allKeys = keys1.concat(keys2, keys3);
      if (allKeys.includes(event.key.toUpperCase())) {
        onSelect(event.key.toUpperCase());
      }
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', handleInput);
    return () => {document.removeEventListener('keydown', handleInput);};
  }, [handleInput]);

  return (
    <div className="keyboard" onKeyDown={handleInput}>
      <div className="line1">
        {keys1.map((key) => (
          <Key val={key} disabled={usedLetters.includes(key)}/>
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key val={key} disabled={usedLetters.includes(key)}/>
        ))}
      </div>
      <div className="line3">
        <Key val={'ENTER'} big={true}/>
        {keys3.map((key) => (
          <Key val={key} disabled={usedLetters.includes(key)}/>
        ))}
        <Key val={'DELETE'} big={true} />
      </div>
    </div>
  );
}
export default Keyboard;
