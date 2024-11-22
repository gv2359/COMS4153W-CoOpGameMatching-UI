import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import BrowseGames from './pages/BrowseGames/BrowseGames';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseGames />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;