import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchMatchRequests, startMatch, fetchMatchStatus } from '../../services/gamesService.js';
import { Container, List, ListItem, Button, Pagination } from './styles';

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
            return {
              ...req,
              status: statusResponse.status,
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
            <div>Game ID: {req.gameId}</div>
            <div>Status: {req.status}</div>
            <div>Expiration Date: {req.expireDate}</div>
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
};

export default MatchHistory;
