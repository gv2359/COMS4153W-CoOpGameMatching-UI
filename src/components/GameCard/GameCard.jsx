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

const HARDCODED_USER_ID = "b0b4f96f-966c-11ef-a4c6-0affd085b90b"; // Temporary

const GameCard = ({ game, onClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleHeartClick = async (e) => {
    e.stopPropagation(); // Prevent card click
    if (isUpdating) return;

    try {
      setIsUpdating(true);
      await updateFavoredGame(HARDCODED_USER_ID, game.gameId);
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