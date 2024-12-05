import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { fetchGames } from '../../services/gamesService.js';
import Pagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput/SearchInput';
import GameCard from '../../components/GameCard/GameCard';
import {
  Container,
  SubNav,
  SearchContainer,
  SearchWrapper,
  // SearchInput,
  SearchIcon,
  Tabs,
  Tab,
  GamesGrid,
  // GameCard,
  GameImage,
  GameInfo,
  GameTitle,
} from './styles';

const BrowseGames = () => {
  const gridRef = useRef(null);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  const handleGameClick = (game) => {
    navigate(`/games/${game.gameId}`, { state: { game } });
  };

  const loadGames = async (page, genre) => {
    try {
      setLoading(true);
      const response = await fetchGames({ 
        page,
        genre: genre === 'All' ? null : genre
      });
      setGames(response.games);
      setHasNextPage(!!response.links.next);
    } catch (error) {
      console.error('Error fetching games:', error);
      setHasNextPage(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    loadGames(currentPage, activeTab);
  }, [currentPage, activeTab]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (gridRef.current) {
      const grid = gridRef.current;
      grid.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        grid.scrollTop = 0;
      }, 0);
    }
  };

  const handleTabChange = (genre) => {
    setActiveTab(genre);
    setCurrentPage(1); // Reset to first page when changing genres
    if (gridRef.current) {
      gridRef.current.scrollTop = 0;
    }
  };

  return (
    <Container>
      <SubNav>
        <SearchContainer>
          <SearchWrapper>
            <SearchIcon>
              <Search size={20} />
            </SearchIcon>
            <SearchInput variant='browse' placeholder="Search games..." />
          </SearchWrapper>
          <Tabs>
            <Tab active={activeTab === 'All'} onClick={() => handleTabChange('All')}>All</Tab>
            <Tab active={activeTab === 'Arcade'} onClick={() => handleTabChange('Arcade')}>Arcade</Tab>
            <Tab active={activeTab === 'Shooter'} onClick={() => handleTabChange('Shooter')}>Shooter</Tab>
            <Tab active={activeTab === 'Platform'} onClick={() => handleTabChange('Platform')}>Platform</Tab>
            <Tab active={activeTab === 'Adventure'} onClick={() => handleTabChange('Adventure')}>Adventure</Tab>
            <Tab active={activeTab === 'Fighting'} onClick={() => handleTabChange('Fighting')}>Fighting</Tab>
            <Tab active={activeTab === 'Puzzle'} onClick={() => handleTabChange('Puzzle')}>Puzzle</Tab>
            <Tab active={activeTab === 'Other'} onClick={() => handleTabChange('Other')}>Other</Tab>
          </Tabs>
        </SearchContainer>
      </SubNav>

      <GamesGrid ref={gridRef}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          games.map(game => (
            <GameCard 
              key={game.gameId}
              game={game}
              onClick={() => handleGameClick(game)}
            />
          ))
        )}
      </GamesGrid>
      <Pagination 
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default BrowseGames;