import React, { useState } from 'react';
import './Calculator.css'; 

const LettersCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
   
    const count = value.replace(/\s/g, '').length;
    setLetterCount(count);
  };

  return (
    <div className="letters-calculator">
      <h1>Calculate the Letters you enter</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text..."
        className="input-field"
      />
      {inputValue && (
        <p className="letter-count">
          Number of letters: {letterCount}
        </p>
      )}
    </div>
  );
}

export default LettersCalculator;
