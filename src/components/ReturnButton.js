import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <button style={styles.button} onClick={() => navigate('/dashboard')}>
      ← 
    </button>
  );
};

const styles = {
  button: {
    
    top: '20px',
    left: '10px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default ReturnButton;
