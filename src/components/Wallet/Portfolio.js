import React from 'react';
import ReturnButton from '../ReturnButton';

const Portfolio = ({ balances, transactions }) => {
  return (
    
    <div style={styles.container}>
      <ReturnButton />
      <div style={styles.balancesContainer}>
      <h2>Your Portfolio</h2>
        <h3>Current Balances</h3>
        <p>BTC: {balances.BTC} BTC</p>
        <p>ETH: {balances.ETH} ETH</p>
        <p>USDT: {balances.USDT} USDT</p>
      </div>
      
      <div style={styles.historyContainer}>
        <h3>Transaction History</h3>
        {transactions.length > 0 ? (
          <ul style={styles.transactionList}>
            {transactions.map((transaction, index) => (
              <li key={index} style={styles.transactionItem}>
                <p>
                  <strong>{transaction.type}</strong> {transaction.amount} {transaction.currency}
                </p>
                <p>{transaction.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions yet.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    textAlign: 'center',
  },
  balancesContainer: {
    marginTop: '80px',
  },
  historyContainer: {
    marginTop: '20px',
  },
  transactionList: {
    listStyleType: 'none',
    padding: 0,
  },
  transactionItem: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
};

export default Portfolio;
