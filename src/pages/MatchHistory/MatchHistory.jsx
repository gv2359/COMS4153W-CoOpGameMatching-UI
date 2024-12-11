// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { fetchMatchRequests, startMatch, fetchMatchStatus } from '../../services/gamesService.js';
// import { Container, List, ListItem, Button, Pagination } from './styles';

// const MatchHistory = () => {
//   const { user } = useAuth();
//   const [matchRequests, setMatchRequests] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [totalPages, setTotalPages] = useState(1);
//   console.log('matchRequests:', matchRequests); 
//   const ITEMS_PER_PAGE = 10;
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await fetchMatchRequests({
//           userId: user?.idToken,
//           page: currentPage,
//           page_size: ITEMS_PER_PAGE,
//         });

//         const enrichedRequests = await Promise.all(
//           response.matchRequests.map(async (req) => {
//             const statusResponse = await fetchMatchStatus(req.matchRequestId);
//             return {
//               ...req,
//               status: statusResponse.status,
//             };
//           })
//         );

//         setMatchRequests(enrichedRequests);
//         setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE));
//       } catch (error) {
//         console.error('Error fetching match requests:', error);
//       }
//     };

//     fetchRequests();
//   }, [user?.idToken, currentPage]);

//   const handleSelect = (matchRequestId) => {
//     setSelectedRequest(matchRequestId);
//   };

//   const handleStartMatching = async () => {
//     if (!selectedRequest) {
//       alert('Please select a match request to start matching.');
//       return;
//     }

//     try {
//       await startMatch({ MatchRequestId: selectedRequest });
//       alert('Matching started successfully!');
//     } catch (error) {
//       console.error('Error starting matching:', error);
//       alert('Failed to start matching.');
//     }
//   };

//   return (
//     <Container>
//       <h2>Match History</h2>
//       <List>
//         {matchRequests.map((req) => (
//           <ListItem
//             key={req.matchRequestId}
//             onClick={() => handleSelect(req.matchRequestId)}
//             selected={req.matchRequestId === selectedRequest}
//           >
//             <div>Game ID: {req.gameId}</div>
//             <div>Status: {req.status}</div>
//             <div>Expiration Date: {req.expireDate}</div>
//           </ListItem>
//         ))}
//       </List>
//       <Pagination>
//         {[...Array(totalPages)].map((_, idx) => (
//           <Button
//             key={idx}
//             onClick={() => setCurrentPage(idx + 1)}
//             active={currentPage === idx + 1}
//           >
//             {idx + 1}
//           </Button>
//         ))}
//       </Pagination>
//       <Button onClick={handleStartMatching} disabled={!selectedRequest}>
//         Start Matching
//       </Button>
//     </Container>
//   );
// };

// export default MatchHistory;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchMatchRequests, startMatch, fetchMatchStatus, fetchGameDetails } from '../../services/gamesService.js';
import { Container, List, ListItem, Button, Pagination, GameImage } from './styles';
import { use } from 'react';

const MatchHistory = () => {
  const { user } = useAuth();
  const [matchRequests, setMatchRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const ITEMS_PER_PAGE = 10;
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetchMatchRequests({
          userId: user?.idToken,
          page: currentPage,
          page_size: ITEMS_PER_PAGE,
        });

        const enrichedRequests = await Promise.all(
          response.matchRequests.map(async (req) => {
            const statusResponse = await fetchMatchStatus(req.matchRequestId);
            const gameDetails = await fetchGameDetails(req.gameId);
            return {
              ...req,
              status: statusResponse.status,
              gameName: gameDetails.title,
              gameImage: gameDetails.image,
            };
          })
        );

        setMatchRequests(enrichedRequests);
        setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching match requests:', error);
      }
    };

    fetchRequests();
    const interval = setInterval(fetchRequests, 5000);

    return () => clearInterval(interval);
  }, [user?.idToken, currentPage]);

  const handleSelect = (matchRequestId) => {
    setSelectedRequest(matchRequestId);
  };

  const handleStartMatching = async () => {
    if (!selectedRequest) {
      alert('Please select a match request to start matching.');
      return;
    }

    try {
      await startMatch({ MatchRequestId: selectedRequest });
      alert('Matching started successfully!');
    } catch (error) {
      console.error('Error starting matching:', error);
      alert('Failed to start matching.');
    }
  };
  // const handleInitiate = async (matchRequestId) => {
  //   try {
  //     const response = await fetch('http://localhost:8000/match-requests/match', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${user?.idToken}`,
  //       },
  //       body: JSON.stringify({ MatchRequestId: matchRequestId }),
  //     });
  
  //     if (!response.ok) {
  //       const errorData = await response.text(); 
  //       console.log('errorData:', errorData);
  //       throw new Error(errorData || 'Failed to initiate match request.');
  //     }
  
  //     const contentType = response.headers.get('Content-Type');
  //     if (contentType && contentType.includes('application/json')) {
  //       const data = await response.json();
  //       alert(`Match request ${matchRequestId} initiated successfully! Poll status at: ${data.polling_url}`);
  //     } else {
  //       alert(`Match request ${matchRequestId} initiated successfully, but no further details were returned.`);
  //     }
  //   } catch (error) {
  //     console.error('Error initiating match:', error);
  //     alert(`Error: ${error.message}`);
  //   }
  // };
  const handleInitiate = async (matchRequestId) => {
    try {
      const response = await fetch('http://localhost:8000/match-requests/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.idToken}`,
        },
        body: JSON.stringify({ MatchRequestId: matchRequestId }),
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to initiate match request.');
      }
  
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        alert(`Match request ${matchRequestId} initiated successfully! Poll status at: ${data.polling_url}`);
      } else {
        alert(`Match request ${matchRequestId} initiated successfully, but no further details were returned.`);
      }
  
      setMatchRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.matchRequestId === matchRequestId
            ? { ...req, initiated: true } // Mark as initiated
            : req
        )
      );
    } catch (error) {
      console.error('Error initiating match:', error);
      alert(`Error: ${error.message}`);
    }
  };
  
  
    return (
    <Container>
      <h2>Match History</h2>  
      <List>
        {matchRequests.map((req) => (
          <ListItem
            key={req.matchRequestId}
            onClick={() => handleSelect(req.matchRequestId)}
            selected={req.matchRequestId === selectedRequest}
          >
            <GameImage src={req.gameImage} alt={`${req.gameName} thumbnail`} />
            <div>Game Name: {req.gameName}</div>
            <div>Status: {req.status}</div>
            <div>Expiration Date: {req.expireDate}</div>
            {req.status === 'matching' ? (
              <span>Initiated</span> 
            ) : req.initiated ? (
              <span>Initiated</span>
            ) : (
              <Button onClick={() => handleInitiate(req.matchRequestId)}>Initiate</Button>
            )}
          </ListItem>
        ))}
      </List>
      <Pagination>
        {[...Array(totalPages)].map((_, idx) => (
          <Button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            active={currentPage === idx + 1}
          >
            {idx + 1}
          </Button>
        ))}
      </Pagination>
      <Button onClick={handleStartMatching} disabled={!selectedRequest}>
        Start Matching
      </Button>
    </Container>
  );
  
  // return (
  //   <Container>
  //     <h2>Match History</h2>  
  //     <List>
  //       {matchRequests.map((req) => (
  //         <ListItem
  //           key={req.matchRequestId}
  //           onClick={() => handleSelect(req.matchRequestId)}
  //           selected={req.matchRequestId === selectedRequest}
  //         >
  //           <GameImage src={req.gameImage} alt={`${req.gameName} thumbnail`} />
  //           {/* <div>Game ID: {req.gameId}</div> */}
  //           <div>Game Name: {req.gameName}</div>
  //           <div>Status: {req.status}</div>
  //           <div>Expiration Date: {req.expireDate}</div>
  //           <Button onClick={() => handleInitiate(req.matchRequestId)}>Initiate</Button>
  //         </ListItem>
  //       ))}
  //     </List>


  //     <Pagination>
  //       {[...Array(totalPages)].map((_, idx) => (
  //         <Button
  //           key={idx}
  //           onClick={() => setCurrentPage(idx + 1)}
  //           active={currentPage === idx + 1}
  //         >
  //           {idx + 1}
  //         </Button>
  //       ))}
  //     </Pagination>
  //     <Button onClick={handleStartMatching} disabled={!selectedRequest}>
  //       Start Matching
  //     </Button>
  //   </Container>
  // );
};

export default MatchHistory;

