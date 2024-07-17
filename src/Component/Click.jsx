import React, { useState } from 'react';
import './Click.css';

function Click() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="box-container">
          <p>The Button has been clicked</p>
          <h1>{count} times</h1>
          <button onClick={handleClick} className="blue-button">Click Me!</button>
        </div>
      </header>
    </div>
  );
}

export default Click;
