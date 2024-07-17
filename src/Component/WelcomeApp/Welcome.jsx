import React, { useState } from 'react';
import './Welcome.css';

function Welcome() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={handleSubscribe}>
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </header>
    </div>
  );
}

export default Welcome;
