import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "../../icons/ArrowLeft";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Simulate successful sign-up
      console.log('Sign-up successful:', { email, password });
      navigate('/dashboard'); // Redirect to dashboard after sign up
    }
  };
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <button onClick={handleBack} style={styles.backButton}>Back</button>
      <h2 style={styles.heading}>Create your account</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.box}>
          
          <div style={styles.rectangle}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.box}>
          <div style={styles.rectangle}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.box}>
          <div style={styles.rectangle}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: '-420px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#0e4ba6',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '-140px',
  },
  heading: {
    color: '#232323',
    fontFamily: '"Space Grotesk-Medium", Helvetica',
    fontSize: '24px',
    fontWeight: '500',
    letterSpacing: '-0.96px',
    lineHeight: '28.8px',
    marginBottom: '10px',
    marginRight:'120px'
  },
  box: {
    height: '56px',
    width: '319px',
    margin: '10px auto',
  },
  rectangle: {
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#23232329',
    borderRadius: '8px',
    height: '56px',
    position: 'relative',
    width: '319px',
  },
  input: {
    display: 'block',
    margin: '0 auto',
    padding: '10px',
    width: '100%',
    border: 'none',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
    backgroundColor: '#0e4ba6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default SignUp;
