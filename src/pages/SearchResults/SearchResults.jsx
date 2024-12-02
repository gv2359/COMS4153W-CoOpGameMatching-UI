import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, ContentWrapper, GamesGrid, NoResults } from './styles';
import { GameCard, GameImage, GameInfo, GameTitle } from '../BrowseGames/styles'; 

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchResults = location.state?.results;
  const games = searchResults?.games || [];

  const handleGameClick = (game) => {
    navigate(`/games/${game.gameId}`, { state: { game } });
  };

  return (
    <Container>
      <ContentWrapper>
        {games.length === 0 ? (
          <NoResults>
            <h2>No games found</h2>
            <p>We couldn't find any games matching your search. Try different keywords?</p>
          </NoResults>
        ) : (
          <GamesGrid>
            {games.map(game => (
              <GameCard key={game.gameId} onClick={() => handleGameClick(game)}>
                <GameImage src={game.links.image.href} alt={game.title} />
                <GameInfo>
                  <GameTitle>{game.title}</GameTitle>
                </GameInfo>
              </GameCard>
            ))}
          </GamesGrid>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default SearchResults;