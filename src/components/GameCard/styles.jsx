import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background: #161922;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
  max-width: 250px; 
  margin: 0 auto; 

  &:hover {
    transform: translateY(-10px);
  }
`;

export const GameImage = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

export const GameInfo = styled.div`
  padding: 15px;
  position: relative; 
  background: #161922;
  z-index: 1; 
`;

export const GameTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.2px;
  padding-left: 30px;
`;

export const HeartContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 2;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    
    svg {
      color: #ff4757; // Red color on hover
      fill: #ff4757; // Also change the fill on hover
    }
  }
`;