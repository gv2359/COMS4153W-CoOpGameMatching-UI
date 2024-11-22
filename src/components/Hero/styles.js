import styled from 'styled-components';

export const HeroContainer = styled.div`
  text-align: center;
  padding: 100px 0;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 40px;
`;
