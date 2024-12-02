import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  color: white;
  font-size: 1rem;
  
  ${props => props.variant === 'browse' && css`
    padding: 12px 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  `}

  ${props => props.variant === 'home' && css`
    padding: 15px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    font-size: 16px;
    outline: none;
    transition: all 0.3s;

    &:focus {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    }
  `}
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  // Only show for browse variant
  display: ${props => props.variant === 'browse' ? 'block' : 'none'};
`;