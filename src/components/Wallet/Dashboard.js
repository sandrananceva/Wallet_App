import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuButton from '../MenuButton';

const Dashboard = ({ balances }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
        <MenuButton />
        <div style={styles.balanceBox}>
        <h1>Your Balances</h1>
      <p>BTC: {balances.BTC} BTC</p>
      <p>ETH: {balances.ETH} ETH</p>
      <p>USDT: {balances.USDT} USDT</p>
      </div>   
   
      
      <div style={styles.buttonBox}>
        <button style={styles.button} onClick={() => navigate('/portfolio')}>
        <div style={styles.textWrapper2}>Portfolio</div>
        </button>
        <button style={styles.button} onClick={() => navigate('/deposit')}>
        <div style={styles.textWrapper2}>Deposit</div>
        </button>
        <button style={styles.button} onClick={() => navigate('/withdraw')}>
        <div style={styles.textWrapper2}> Withdraw</div>
        </button>
      </div>
      

    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
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
  balanceBox:{
    marginTop: '100px',
  },
 
  buttonBox: {
    marginTop: '100px',
    height: '689px',
    width: '286px',
  },
};

export default Dashboard;
