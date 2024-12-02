import React from 'react';
import { useLocation } from 'react-router-dom';
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
  const game = location.state?.game;

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
        <MatchButton>Match</MatchButton>
      </ContentWrapper>
    </Container>
  );
};

export default GameDetail;