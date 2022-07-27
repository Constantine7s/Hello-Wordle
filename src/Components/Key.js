import React from 'react';

function Key({val, big}) {
  return <div className="key" id={big && "big"}>{val}</div>;
}

export default Key;