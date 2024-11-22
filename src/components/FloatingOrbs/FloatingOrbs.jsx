import React from 'react';
import { OrbsContainer, Orb } from './styles';

const FloatingOrbs = () => (
  <OrbsContainer>
    <Orb size={100} delay={0} top={20} left={10} />
    <Orb size={60} delay={-2} top={60} left={80} />
    <Orb size={40} delay={-4} top={30} left={90} />
  </OrbsContainer>
);

export default FloatingOrbs;
