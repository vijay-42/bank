import React, { useState, createContext, useContext } from 'react';

const VijayContext = createContext();

const Transaction = () => {
   
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    if (amount > 0) {
      setBalance((prevBalance) => prevBalance + amount);
      setAmount(0);
    } else {
      alert('Insufficient balance or invalid amount!');
    }
  };

  const handleWithdraw = () => {
    if (amount > 0 && balance >= amount) {
      setBalance((prevBalance) => prevBalance - amount);
      setAmount(0);
    } else {
      alert('Insufficient balance or invalid amount!');
    }
  };

  return (
    <VijayContext.Provider value={{ balance}}>
      <div>
        <center>
          <h1>Bank Account</h1>
          <p>Balance:${balance}</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />{' '}
          <br />
          <br />
          <button
            className="btn btn-outline-success"
            onClick={handleDeposit}
          >
            Deposit
          </button>
          <span> </span>
          <button
            className="btn btn-outline-primary"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
          <br /> <br />
          
        </center>
        <New />
      </div>
    </VijayContext.Provider>
  );
};

const New = () => {
  const { balance } = useContext(VijayContext);
  return (
    <>
     
      <h2>{` Balance:$ ${balance}  `}</h2>
    </>
  );
};

const App = () => {
  return <Transaction />;
};

export default App;
