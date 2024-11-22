// src/components/Navigation/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavWrapper, NavContent, Nav, Logo, Links } from './styles';

const getNavBackground = (pathname) => {
  switch(pathname) {
    case '/browse':
      return '#07071f';
    default:
      return 'rgba(15, 15, 45, 0.5)';
  }
};

const Navigation = () => {
  const location = useLocation();
  const backgroundColor = getNavBackground(location.pathname);

  return (
    <NavWrapper $backgroundColor={backgroundColor}>
      <NavContent>
        <Nav>
          <Logo>GameMatch</Logo>
          <Links>
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Games</Link>
            <Link to="/profile">Profile</Link>
          </Links>
        </Nav>
      </NavContent>
    </NavWrapper>
  );
};

export default Navigation;