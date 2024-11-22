// src/components/SearchContainer/SearchContainer.jsx
import React from 'react';
import {
  Container,
  SearchBox,
  Input,
  Button,
  PopularGames,
  GameTag
} from './styles';

const SearchContainer = () => (
  <Container>
    <SearchBox>
      <Input placeholder="Search for a game..." />
      <Button>Find Match</Button>
    </SearchBox>
    <PopularGames>
      <GameTag>Valorant</GameTag>
      <GameTag>League of Legends</GameTag>
      <GameTag>CS:GO</GameTag>
      <GameTag>Apex Legends</GameTag>
    </PopularGames>
  </Container>
);

export default SearchContainer;