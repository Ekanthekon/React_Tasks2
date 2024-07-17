import React, { useState } from 'react';
import './Speed.css';

function Speed() {
  const [speed, setSpeed] = useState(0);

  const handleAccelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10);
    }
  };

  const handleBrake = () => {
    if (speed > 0) {
      setSpeed(speed - 10);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="speedometer-container">
          <h1>SPEEDOMETER</h1>
          <div className="speed-display">
            <h2>{speed} mph</h2>
          </div>
          <div className="controls">
            <button onClick={handleAccelerate}>Accelerate</button>
            <button onClick={handleBrake}>Apply Brake</button>
          </div>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
      </header>
    </div>
  );
}

export default Speed;
