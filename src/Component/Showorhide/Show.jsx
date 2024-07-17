import React, { useState } from 'react';
import './show.css';

function Show() {
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  const handleToggleFirstName = () => {
    setShowFirstName(!showFirstName);
  };

  const handleToggleLastName = () => {
    setShowLastName(!showLastName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Show/Hide</h1>
        <div className="controls">
          <button onClick={handleToggleFirstName}>
            {showFirstName ? 'Hide Firstname' : 'Show Firstname'}
          </button>
          {showFirstName && <p className="name-display">Firstname: John</p>}
          <button onClick={handleToggleLastName}>
            {showLastName ? 'Hide Lastname' : 'Show Lastname'}
          </button>
          {showLastName && <p className="name-display">Lastname: Doe</p>}
        </div>
      </header>
    </div>
  );
}

export default Show;
