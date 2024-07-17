import React, { useState } from 'react';
import './Random.css';

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    setNumber(randomNumber);
  };

  return (
    <div className="random-number-generator">
      <h1>Random Number Generator</h1>
      <p>Generate a random number in the range of 0 to 100</p>
      <div className="number-display">{number}</div>
      <button className="generate-button" onClick={generateRandomNumber}>Generate</button>
    </div>
  );
};

export default RandomNumberGenerator;
