import React from 'react';
import styled from 'styled-components';
import { auth } from '../../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Original floating button style
const FloatingButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
  }
`;

// Navigation style (moved from Navigation/styles.js)
const NavButton = styled.button`
  color: white;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  padding: 12px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  min-width: 110px;
  margin-left: 30px;
  margin-right: 30px;
  line-height: normal;
  align-self: center;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SignInButton = ({ variant = 'nav' }) => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const ButtonComponent = variant === 'nav' ? NavButton : FloatingButton;

  return (
    <ButtonComponent onClick={signInWithGoogle}>
      Sign In
    </ButtonComponent>
  );
};

export default SignInButton;