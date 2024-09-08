import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={styles.menuContainer}>
      <button onClick={toggleMenu} style={styles.menuButton}>
        ☰ Menu
      </button>
      {isOpen && (
        <div style={styles.dropdownMenu}>
          <button style={styles.menuItem}>User Settings</button>
          <button style={styles.menuItem}>App Preferences</button>
          <button style={styles.menuItem} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  menuContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  menuButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  dropdownMenu: {
    marginTop: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
    textAlign: 'left',
  },
  menuItem: {
    display: 'block',
    width: '100%',
    padding: '10px 20px',
    textAlign: 'left',
    cursor: 'pointer',
    backgroundColor: 'white',
    border: 'none',
    borderBottom: '1px solid #ccc',
    fontSize: '16px',
  },
};

export default MenuButton;
