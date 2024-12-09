import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import BrowseGames from './pages/BrowseGames/BrowseGames';
import GameDetail from './pages/GameDetail/GameDetail';
import SearchResults from './pages/SearchResults/SearchResults';
import { AuthProvider } from './context/AuthContext';
import CreateMatchRequest from './pages/CreateMatchRequest/CreateMatchRequest';
import MatchHistory from './pages/MatchHistory/MatchHistory';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseGames />} />
          <Route path="/games/:gameId" element={<GameDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/match-request/:gameId" element={<CreateMatchRequest />} />
          <Route path="/match-history" element={<MatchHistory />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}


export default App;