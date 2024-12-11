// import React, { useRef } from 'react';
// import SearchInput from '../SearchInput/SearchInput';
// import {
//   Container,
//   SearchBox,
//   Button,
//   PopularGames,
//   GameTag
// } from './styles';

// const SearchContainer = () => {
//   const searchInputRef = useRef();

//   return (
//     <Container>
//       <SearchBox>
//         <SearchInput ref={searchInputRef} variant='home' />
//         <Button onClick={() => searchInputRef.current?.triggerSearch()}>
//           Find Match
//         </Button>
//       </SearchBox>
//       <PopularGames>
//         <GameTag>Valorant</GameTag>
//         <GameTag>League of Legends</GameTag>
//         <GameTag>CS:GO</GameTag>
//         <GameTag>Apex Legends</GameTag>
//       </PopularGames>
//     </Container>
//   );
// };

// export default SearchContainer;

import React, { useState, useEffect, useRef } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import {
  Container,
  SearchBox,
  Button,
  PopularGames,
  GameTag,
  GameImage
} from './styles';

const SearchContainer = () => {
  const searchInputRef = useRef();
  const [recommendedGames, setRecommendedGames] = useState([]);

  // Fetch recommendations from the API
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const userId = "abcd"; // Replace with the actual user ID
        const response = await fetch(`http://localhost:8005/recommendations/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }
        const data = await response.json();
        setRecommendedGames(data.games || []); // Set the recommended games
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, []); // Run this effect once when the component mounts

  return (
    <Container>
      <SearchBox>
        <SearchInput ref={searchInputRef} variant="home" />
        <Button onClick={() => searchInputRef.current?.triggerSearch()}>
          Find Match
        </Button>
      </SearchBox>
      <PopularGames>
        {recommendedGames.length > 0 ? (
          recommendedGames.map((game) => (
            <div key={game.gameId} style={{ marginBottom: "10px" }}>
              <GameImage
                src={
                  game.links.image.href === "No image available"
                    ? "images/ph1.png" // Replace with your placeholder image URL
                    : game.links.image.href
                }
                alt={game.title}
              />
              <GameTag>{game.title}</GameTag>
            </div>
          ))
        ) : (
          <p>Loading recommended games...</p>
        )}
      </PopularGames>
    </Container>
  );
};

export default SearchContainer;
