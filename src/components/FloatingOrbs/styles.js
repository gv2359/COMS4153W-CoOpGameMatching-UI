import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
`;

export const OrbsContainer = styled.div`
  position: fixed;  // Change to fixed
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const Orb = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle at center, 
    rgba(0, 255, 255, 0.2), 
    rgba(255, 0, 255, 0.1)
  );
  border-radius: 50%;
  animation: ${float} 8s infinite;
  animation-delay: ${props => props.delay}s;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2),
              inset 0 0 20px rgba(255, 0, 255, 0.2);
  backdrop-filter: blur(5px);
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  pointer-events: none;  // Add this to ensure orbs don't block interaction
`;