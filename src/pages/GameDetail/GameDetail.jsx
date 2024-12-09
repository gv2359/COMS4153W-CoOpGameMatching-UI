import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ContentWrapper,
  GameTitle,
  GameContent,
  ImageContainer,
  GameImage,
  DetailsContainer,
  Description,
  MatchButton
} from './styles';

const GameDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const game = location.state?.game;



  const handleMatchClick = (game) => {
    navigate(`/match-request/${game.gameId}`, { state: { game } });
  };


  return (
    <Container>
      <ContentWrapper>
        <GameTitle>{game?.title}</GameTitle>
        <GameContent>
          <ImageContainer>
            <GameImage src={game?.links.image.href} alt={game?.title} />
          </ImageContainer>
          <DetailsContainer>
            <Description>
              {game?.description}
            </Description>
          </DetailsContainer>
        </GameContent>
        <MatchButton onClick={() => handleMatchClick(game)}>Match</MatchButton>
      </ContentWrapper>
    </Container>
  );
};

export default GameDetail;