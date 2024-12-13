import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { updateFavoredGame } from '../../services/gamesService';
import {
  Card,
  GameImage,
  GameInfo,
  GameTitle,
  HeartContainer
} from './styles';


const GameCard = ({ game, onClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleHeartClick = async (e) => {
    e.stopPropagation(); // Prevent card click
    if (isUpdating) return;

    try {
        const favouritedData = {
        gameId : game.gameId
      };
      setIsUpdating(true);
      await updateFavoredGame(favouritedData);
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error('Failed to update favored game:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card onClick={onClick}>
      <HeartContainer onClick={handleHeartClick}>
        <Heart 
          size={24} 
          fill={isFavorited ? 'red' : 'none'} 
          color="white"
          style={{ 
            opacity: isUpdating ? 0.5 : 1,
            transition: 'all 0.2s'
          }}
        />
      </HeartContainer>
      <GameImage src={game.links.image.href} alt={game.title} />
      <GameInfo>
        <GameTitle>{game.title}</GameTitle>
      </GameInfo>
    </Card>
  );
};

export default GameCard;