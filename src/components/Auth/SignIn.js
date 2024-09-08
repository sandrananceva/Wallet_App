import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VuesaxBoldTickSquare1 } from "../../icons/VuesaxBoldTickSquare1";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill all fields.');
    } else {
      setError('');
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={styles.login}>
      <div style={styles.div}>
        <button onClick={handleBack} style={styles.backButton}>Back</button>
        <form onSubmit={handleSubmit}>
          <div style={styles.group2}>
            <div style={styles.textWrapper2}>Email</div>
            <div style={styles.overlapGroupWrapper}>
              <div style={styles.divWrapper}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.textWrapper3}
                />
              </div>
            </div>
          </div>
          <div style={styles.group3}>
            <div style={styles.frameWrapper}>
              <div style={styles.frame}>
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
                <div style={styles.ellipse} />
              </div>
            </div>
            <div style={styles.textWrapper2}>Password</div>
            <div style={styles.overlapGroupWrapper}>
              <div style={styles.divWrapper}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.textWrapper3}
                />
              </div>
            </div>
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
        <p style={styles.welcomeBackPlease}>
          Welcome back!
          <br />
          Please login to continue
        </p>
        <div style={styles.frame2}>
          <VuesaxBoldTickSquare1 style={styles.vuesaxBoldTick} />
          <div style={styles.textWrapper4}>Remember me</div>
        </div>
        <div style={styles.textWrapper5}>Forgot Password?</div>
      </div>
    </div>
  );
};

const styles = {
  login: {
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
    marginTop: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#0e4ba6',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '-140px',
  },
  div: {
    backgroundColor: '#ffffff',
    height: '812px',
    position: 'relative',
    width: '375px',
  },
  group2: {
    height: '81px',
    left: '28px',
    position: 'absolute',
    top: '237px',
    width: '321px',
  },
  textWrapper2: {
    color: '#232323',
    fontFamily: '"Inter-Medium", Helvetica',
    fontSize: '14px',
    fontWeight: '500',
    left: '0',
    letterSpacing: '-0.42px',
    lineHeight: '16.8px',
    position: 'absolute',
    top: '0',
    whiteSpace: 'nowrap',
  },
  overlapGroupWrapper: {
    height: '56px',
    left: '0',
    position: 'absolute',
    top: '25px',
    width: '321px',
  },
  divWrapper: {
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#23232329',
    borderRadius: '8px',
    height: '56px',
    position: 'relative',
    width: '319px',
  },
  textWrapper3: {
    color: '#232323',
    fontFamily: '"Inter-Regular", Helvetica',
    fontSize: '14px',
    fontWeight: '400',
    left: '15px',
    letterSpacing: '-0.42px',
    lineHeight: '16.8px',
    position: 'absolute',
    top: '19px',
    whiteSpace: 'nowrap',
    width: '90%',
    border: 'none',
    outline: 'none',
  },
  group3: {
    height: '81px',
    left: '28px',
    position: 'absolute',
    top: '334px',
    width: '321px',
  },
  frameWrapper: {
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#23232329',
    borderRadius: '8px',
    height: '56px',
    left: '0',
    position: 'absolute',
    top: '25px',
    width: '319px',
  },
  frame: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    gap: '5px',
    left: '15px',
    position: 'absolute',
    top: '23px',
  },
  ellipse: {
    backgroundColor: '#232323',
    borderRadius: '4px',
    height: '8px',
    position: 'relative',
    width: '8px',
  },
  vuesaxLinearEye: {
    height: '24px',
    left: '278px',
    position: 'absolute',
    top: '15px',
    width: '24px',
  },
  welcomeBackPlease: {
    color: '#232323',
    fontFamily: '"Space Grotesk-Medium", Helvetica',
    fontSize: '24px',
    fontWeight: '500',
    left: '28px',
    letterSpacing: '-0.96px',
    lineHeight: '28.8px',
    position: 'absolute',
    top: '114px',
  },
  frame2: {
    alignItems: 'center',
    display: 'inline-flex',
    gap: '8px',
    left: '28px',
    position: 'absolute',
    top: '431px',
  },
  vuesaxBoldTick: {
    height: '24px',
    position: 'relative',
    width: '24px',
  },
  textWrapper4: {
    color: '#232323',
    fontFamily: '"Inter-Regular", Helvetica',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '-0.42px',
    lineHeight: '21px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },
  textWrapper5: {
    color: '#0e4ba6',
    fontFamily: '"Inter-Medium", Helvetica',
    fontSize: '14px',
    fontWeight: '500',
    left: '233px',
    letterSpacing: '-0.42px',
    lineHeight: '21px',
    position: 'absolute',
    top: '432px',
    whiteSpace: 'nowrap',
  },
  arrowLeft: {
    height: '24px',
    left: '28px',
    position: 'absolute',
    top: '62px',
    width: '24px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    position: 'absolute',
    top: '420px',
    left: '28px',
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
    position: 'absolute',
    left: '28px',
    top: '527px',
    width: '321px',
  },
};

export default SignIn;
