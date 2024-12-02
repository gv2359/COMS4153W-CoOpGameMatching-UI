import styled from 'styled-components';
import { GamesGrid as BrowseGamesGrid } from '../BrowseGames/styles';

export const Container = styled.div`
  color: white;
  padding-top: 74px;
  background-color: #22242f;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GamesGrid = styled(BrowseGamesGrid)`
  margin-top: 0; // Override the margin since we don't have the subnav here
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 100px 20px;
  color: rgba(255, 255, 255, 0.9);

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;