import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  background-color: #22242f;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// export const ListItem = styled.div`
//   background: ${(props) => (props.selected ? 'rgba(0, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)')};
//   border: ${(props) => (props.selected ? '2px solid #00ffff' : '2px solid transparent')};
//   padding: 20px;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.15);
//   }

//   div {
//     margin-bottom: 5px;
//   }
// `;

export const Pagination = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  background: ${(props) => (props.active ? '#00ffff' : 'rgba(255, 255, 255, 0.1)')};
  box-shadow: ${(props) => (props.active ? '0 0 10px #00ffff' : 'none')};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.05);
    cursor: not-allowed;
  }
`;

// export const GameImage = styled.img`
//   width: 150px; /* Set a fixed width */
//   height: auto; /* Maintain aspect ratio */
//   border-radius: 8px; /* Optional: Rounded corners */
//   margin-right: 16px; /* Space between image and text */
// `;

export const GameImage = styled.img`
  width: 100px; /* Slightly smaller image */
  height: 100px; /* Maintain square size */
  border-radius: 12px; /* Rounded corners */
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add a shadow for depth */
`;


export const ListItem = styled.div`
  background: ${(props) => (props.selected ? 'rgba(0, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)')};
  border: ${(props) => (props.selected ? '2px solid #00ffff' : '2px solid transparent')};
  padding: 20px;
  border-radius: 12px; /* Softer rounded corners */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for a card effect */

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
