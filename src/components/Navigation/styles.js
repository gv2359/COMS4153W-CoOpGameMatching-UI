import styled, { keyframes } from 'styled-components'; // Make sure to import keyframes

const gradientMove = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${props => props.$backgroundColor};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  z-index: 3;
  position: fixed;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(
      90deg, 
      rgba(0, 255, 255, 0.2) 0%,
      rgba(255, 0, 255, 0.2) 50%,
      rgba(0, 255, 255, 0.2) 100%
    );
    background-size: 200% 100%;
    animation: ${gradientMove} 2s linear infinite;
  }
`;

export const NavContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  // background-color: rgba(15,15,45, 0.5);
  backdrop-filter: blur(10px);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 0 0 40px; // Remove right padding, keep left padding for logo
  height: 74px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Links = styled.div`
  display: flex;
  gap: 0px;
  height: 100%;

  a:last-child {
    margin-right: 0; 
    padding-right: 0;
  }
  
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 150px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #fff;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
      
      &::after {
        width: 100%;
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #161922;
  border-radius: 8px;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0px' : '-10px'});
  transition: all 0.3s ease;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  color: ${props => props.$isSignOut ? '#ff4757' : 'rgba(255, 255, 255, 0.8)'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;