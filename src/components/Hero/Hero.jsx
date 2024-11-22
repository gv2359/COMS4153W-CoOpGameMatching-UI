import React from 'react';
import { HeroContainer, Title, Subtitle } from './styles';
import SearchContainer from '../SearchContainer/SearchContainer';

const Hero = () => (
  <HeroContainer>
    <Title>Find Your Perfect Gaming Partner</Title>
    <Subtitle>Connect with players who share your gaming schedule and style</Subtitle>
    <SearchContainer />
  </HeroContainer>
);

export default Hero;