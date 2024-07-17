import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-container">
          {isLoggedIn ? (
            <>
              <h1>Welcome User</h1>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <h1>Please Login</h1>
              <button onClick={handleLogin}>Login</button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Login;
