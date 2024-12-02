import React, { useRef } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import {
  Container,
  SearchBox,
  Button,
  PopularGames,
  GameTag
} from './styles';

const SearchContainer = () => {
  const searchInputRef = useRef();

  return (
    <Container>
      <SearchBox>
        <SearchInput ref={searchInputRef} variant='home' />
        <Button onClick={() => searchInputRef.current?.triggerSearch()}>
          Find Match
        </Button>
      </SearchBox>
      <PopularGames>
        <GameTag>Valorant</GameTag>
        <GameTag>League of Legends</GameTag>
        <GameTag>CS:GO</GameTag>
        <GameTag>Apex Legends</GameTag>
      </PopularGames>
    </Container>
  );
};

export default SearchContainer;