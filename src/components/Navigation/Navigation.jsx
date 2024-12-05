import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SignInButton  from '../SignInButton/SignInButton';
import { 
  NavWrapper, 
  NavContent, 
  Nav, 
  Logo, 
  Links,
  ProfileContainer,
  DropdownMenu,
  DropdownItem,
} from './styles';

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
  const { user, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [user]);

  return (
    <NavWrapper $backgroundColor={backgroundColor}>
      <NavContent>
        <Nav>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>GameMatch</Logo>
          </Link>
          <Links>
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Games</Link>
            {user ? (
              <ProfileContainer 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link to="/profile">{user.name || 'Profile'}</Link>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>My Favorites</DropdownItem>
                  <DropdownItem>Match History</DropdownItem>
                  <DropdownItem $isSignOut onClick={signOut}>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </ProfileContainer>
            ) : (
              <SignInButton variant="nav"/>
            )}
          </Links>
        </Nav>
      </NavContent>
    </NavWrapper>
  );
};

export default Navigation;