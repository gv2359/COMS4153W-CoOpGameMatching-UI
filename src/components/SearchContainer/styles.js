// src/components/SearchContainer/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
`;

export const Button = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background: ${props => props.theme.gradients.primary};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PopularGames = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const GameTag = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;