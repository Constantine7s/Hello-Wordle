import React, { useContext } from 'react';
import { MyContext } from '../App';

function Key({ val, big }) {
  const {
    onDelete,
    onEnter,
    onSelect,
  } = useContext(MyContext);

  const chooseLetter = () => {
    if (val === 'ENTER') {
      onEnter();
    } else if (val === 'DELETE') {
      onDelete();
    } else {
      onSelect(val);
    }
  };
  return (
    <div className="key" id={big && 'big'} onClick={chooseLetter}>
      {val}
    </div>
  );
}

export default Key;
