import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  padding-top: 74px;
  background-color: #22242f; // Much lighter background for content area
  min-height: 100vh;
`;

export const SubNav = styled.div`
  position: fixed;
  top: 74px;
  left: 0;
  right: 0;
  background-color: #0d0d17; // Darker background for subnav
  backdrop-filter: blur(10px);
  z-index: 10;
  padding: 20px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); // Add shadow for depth
  justify-content: center;
`;

export const SearchContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
`;

export const Tabs = styled.div`
  display: flex;
  gap: 30px;
`;

export const Tab = styled.div`
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: white;
  }
`;

export const GameInfo = styled.div`
  padding: 15px;
`;

export const GameTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9); // Slightly dimmed for better aesthetics
  letter-spacing: 0.2px; // Optional: adds a bit of spacing between letters
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Exactly 4 cards per row
  gap: 24px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px;
  height: calc(100vh - 140px); // Full height minus nav and subnav
  overflow-y: auto; // Enable vertical scrolling
  margin-top: 120px;
  padding: 20px 100px;
`;

export const GameCard = styled.div`
  background: #161922;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
  max-width: 250px; 
  margin: 0 auto; 


  &:hover {
    transform: translateY(-5px);
  }
`;

export const GameImage = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;