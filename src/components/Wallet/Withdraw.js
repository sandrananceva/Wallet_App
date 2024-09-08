import React, { useState } from 'react';
import ReturnButton from '../ReturnButton';

const Withdraw = ({ balances, setBalances, transactions, setTransactions }) => {
  const [currency, setCurrency] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleWithdraw = () => {
    if (parseFloat(amount) > 0 && parseFloat(amount) <= balances[currency]) {
      setStatus('In Progress...');
      setTimeout(() => {
        setBalances((prevBalances) => ({
          ...prevBalances,
          [currency]: prevBalances[currency] - parseFloat(amount),
        }));

        setTransactions([
          ...transactions,
          {
            type: 'Withdraw',
            currency: currency,
            amount: parseFloat(amount),
            date: new Date().toLocaleString(),
          },
        ]);

        setStatus('Success');
      }, 2000);
    } else {
      setStatus('Failed: Invalid withdraw amount');
    }
  };

  return (
    <div style={styles.container}>
      <ReturnButton />
      <div style={styles.withdrawContainer}>
      <h2>Withdraw Funds</h2>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={styles.select}>
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="ETH">Ethereum (ETH)</option>
        <option value="USDT">Tether (USDT)</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleWithdraw}>
      <div style={styles.textWrapper2}> Withdraw</div>
      </button>
      {status && <p>{status}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    textAlign: 'center',
    position: 'relative',
  },
  input: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#f2f2f2',
    borderRadius: '14px',
    flexDirection: 'column',
    gap: '9px',
    height: '66px',
    padding: '12px 16px',
    position: 'relative',
    width: '331px',
    margin: '10px auto',
    border: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#0e4ba6',
    borderRadius: '100px',
    height: '56px',
    position: 'relative',
    width: '319px',
    cursor: 'pointer',
  },
  textWrapper2: {
    color: '#ffffff',
    fontFamily: '"Space Grotesk", Helvetica',
    fontSize: '16px',
    fontWeight: '500',
    left: '130px',
    letterSpacing: '-0.64px',
    lineHeight: '19.2px',
    position: 'absolute',
    textAlign: 'center',
    top: '19px',
    whiteSpace: 'nowrap',
  },
  select: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#f2f2f2',
    borderRadius: '14px',
    flexDirection: 'column',
    gap: '9px',
    height: '66px',
    padding: '12px 16px',
    position: 'relative',
    width: '331px',
    margin: '10px auto',
    border: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  withdrawContainer: {
    paddingTop: '50px',
  }
};

export default Withdraw;
