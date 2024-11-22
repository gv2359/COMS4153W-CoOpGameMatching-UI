import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }

  html, body {
    overflow-x: hidden; // Prevent horizontal scroll
    position: relative; // Added position
    width: 100%;      // Ensure full width
    margin: 0;        // Reset margin
  }

  body {
    background-color: #07071f;
    color: #fff;
    min-height: 100vh;
  }
`;
