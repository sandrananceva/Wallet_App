import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Wallet/Dashboard';
import Deposit from './components/Wallet/Deposit';
import Withdraw from './components/Wallet/Withdraw';
import Portfolio from './components/Wallet/Portfolio';

const App = () => {
  const [balances, setBalances] = useState({
    BTC: 0, 
    ETH: 0,  
    USDT: 0, 
  });

 
  const [transactions, setTransactions] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard balances={balances} />} />
        <Route
          path="/deposit"
          element={
            <Deposit
              balances={balances}
              setBalances={setBalances}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/withdraw"
          element={
            <Withdraw
              balances={balances}
              setBalances={setBalances}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/portfolio"
          element={<Portfolio balances={balances} transactions={transactions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
