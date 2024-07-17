import React, { useState } from 'react';
import './Odd.css';

function Odd() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Count is Even');

  const handleIncrement = () => {
    const incrementValue = Math.floor(Math.random() * 101); 
    setCount(count + incrementValue);

    if (isEven(count + incrementValue)) {
      setMessage('Count is Even');
    } else {
      setMessage('Count is Odd');
    }
  };

  const isEven = (number) => {
    return number % 2 === 0;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="even-odd-container">
          <h1>Even Odd App</h1>
          <p>Count {count}</p>
          <p>{message}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      </header>
    </div>
  );
}

export default Odd;
