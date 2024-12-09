import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  background-color: #22242f;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;