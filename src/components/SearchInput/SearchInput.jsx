import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { searchGames } from '../../services/gamesService';
import { SearchWrapper, SearchInput as StyledInput, SearchIcon } from './styles';

const SearchInput = forwardRef(({ variant = 'browse' }, ref) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const results = await searchGames(searchTerm.trim());
        navigate('/search', { state: { results } });
      } catch (error) {
        console.error('Search failed:', error);
      }
    }
  };

  // Expose the search function through ref
  useImperativeHandle(ref, () => ({
    triggerSearch: handleSearch
  }));

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon variant={variant}>
        <Search size={20} />
      </SearchIcon>
      <StyledInput
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        variant={variant}
      />
    </SearchWrapper>
  );
});

export default SearchInput;