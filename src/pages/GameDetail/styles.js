import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  padding-top: 74px;
  background-color: #22242f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; // This will help center children
`;

export const GameTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  width: 100%;
  text-align: left;
`;

export const GameContent = styled.div`
  display: flex;
  gap: 40px;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%; // Ensure it takes full width
  margin-bottom: 50px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 300px; // Fixed width
  height: 400px; // Fixed height
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  flex: 1;
  max-height: 500px; // Match image height
  overflow-y: auto;
  padding-right: 20px;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-align: middle;
  text-indent: 2em; // Adds paragraph indentation
  padding: 0 10px; // Optional: adds some padding on the sides
`;

export const MatchButtonContainer = styled.div`
  width: 100%; // Take full width of parent
  display: flex;
  justify-content: center; // Center the button
  margin-top: 50px;
`;

export const MatchButton = styled.button`
  padding: 15px 60px;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;