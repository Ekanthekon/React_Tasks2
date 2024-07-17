import React, { useState } from 'react';
import './Cash.css';

const CashWithdrawal = ({ initialBalance }) => {
  const [balance, setBalance] = useState(initialBalance);
  const denominationsList = [
    { id: 1, value: 50 },
    { id: 2, value: 200 },
    { id: 3, value: 100 },
    { id: 4, value: 500 }
  ];

  const handleWithdrawal = (amount) => {
    setBalance(prevBalance => prevBalance - amount);
  };

  return (
    <div className="withdrawal">
      <h2>Sarah Williams</h2>
      <h3>Your Balance</h3>
      <p>{balance} In Rupees</p>
      <h3>Withdraw</h3>
      <div className="buttons">
        {denominationsList.map(denomination => (
          <button key={denomination.id} onClick={() => handleWithdrawal(denomination.value)}>
            CHOOSE {denomination.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CashWithdrawal;
