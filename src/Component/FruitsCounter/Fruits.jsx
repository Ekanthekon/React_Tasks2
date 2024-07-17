import React, { useState } from 'react';
import './Fruits.css';

function Fruits() {
  const [mangoCount, setMangoCount] = useState(0);
  const [bananaCount, setBananaCount] = useState(0);

  const handleEatMango = () => {
    setMangoCount(mangoCount + 1);
  };

  const handleEatBanana = () => {
    setBananaCount(bananaCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="fruits-counter-container">
          <h1>Fruits Counter</h1>
          <p>Mahesh Babu ate {mangoCount} mangoes and {bananaCount} bananas</p>
          <div className="controls">
            <button onClick={handleEatMango}>Eat Mango</button>
            <button onClick={handleEatBanana}>Eat Banana</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Fruits;
