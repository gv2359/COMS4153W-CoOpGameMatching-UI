import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import FloatingOrbs from '../components/FloatingOrbs/FloatingOrbs';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px 40px 40px;
`;

const Home = () => {
  return (
    <>
      <ParticlesBackground />
      <FloatingOrbs />
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default Home;