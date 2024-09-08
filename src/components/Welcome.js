import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.div}>
        <div style={styles.overlap}>
          <div style={styles.textWrapper}>Crypto Currency Wallet</div>
          <img
            style={styles.frame}
            alt="Frame"
            src="https://c.animaapp.com/N0GkBUPw/img/frame-36.svg"
          />
          <img
            style={styles.iphone}
            alt="Iphone"
            src="https://c.animaapp.com/N0GkBUPw/img/iphone-15.png"
          />
        </div>
        <p style={styles.itsEasierToMake}>
          It's easier to make cryptocurrency transactions in your hand, wherever and whenever. Get the lowest fees ever!
        </p>
        <div style={styles.group}>
          <div style={styles.overlapGroup} onClick={() => navigate('/signup')}>
            <div style={styles.textWrapper2}>Register - It’s free</div>
          </div>
        </div>
        <div style={styles.textWrapper3} onClick={() => navigate('/signin')}>
          Sign In
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    height: '812px',
    position: 'relative',
    width: '375px',
  },
  overlap: {
    height: '439px',
    left: '0',
    position: 'absolute',
    top: '55px',
    width: '375px',
  },
  textWrapper: {
    color: '#232323',
    fontFamily: '"Space Grotesk", Helvetica',
    fontSize: '32px',
    fontWeight: '700',
    left: '28px',
    letterSpacing: '-1.28px',
    lineHeight: '38.4px',
    position: 'absolute',
    textAlign: 'center',
    top: '363px',
    width: '319px',
  },
  frame: {
    height: '286px',
    left: '29px',
    position: 'absolute',
    top: '38px',
    width: '319px',
  },
  iphone: {
    height: '379px',
    left: '0',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    width: '375px',
  },
  itsEasierToMake: {
    color: '#757575',
    fontFamily: '"Inter", Helvetica',
    fontSize: '16px',
    fontWeight: '400',
    left: '28px',
    letterSpacing: '-0.48px',
    lineHeight: '27.2px',
    position: 'absolute',
    textAlign: 'center',
    top: '518px',
    width: '319px',
  },
  group: {
    height: '56px',
    left: '28px',
    position: 'absolute',
    top: '670px',
    width: '321px',
  },
  overlapGroup: {
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
    left: '96px',
    letterSpacing: '-0.64px',
    lineHeight: '19.2px',
    position: 'absolute',
    textAlign: 'center',
    top: '19px',
    whiteSpace: 'nowrap',
  },
  textWrapper3: {
    color: '#757575',
    fontFamily: '"Space Grotesk", Helvetica',
    fontSize: '14px',
    fontWeight: '500',
    left: '167px',
    letterSpacing: '-0.56px',
    lineHeight: '16.8px',
    position: 'absolute',
    textAlign: 'center',
    top: '741px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Welcome;
