import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchMatchRequests, startMatch, fetchMatchStatus, fetchGameDetails } from '../../services/gamesService.js';
import { Container, List, ListItem, Button, GameImage } from './styles';

const MatchHistory = () => {
  const { user } = useAuth();
  const [matchRequests, setMatchRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [links, setLinks] = useState({ next: null, prev: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const MATCH_REQUEST_URL = 'http://localhost:8000';

  const fetchRequests = useCallback(async (url = null) => {
    try {
      const queryParams = url || `?page=${currentPage}&page_size=${pageSize}`;
      const response = await fetchMatchRequests({
        userId: user?.idToken,
        url: `${MATCH_REQUEST_URL}/match-requests${queryParams}`,
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
      setLinks(response.links); // Update links for pagination
    } catch (error) {
      console.error('Error fetching match requests:', error);
    }
  }, [currentPage, pageSize, user?.idToken]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page'), 10) || 1;
    const size = parseInt(urlParams.get('page_size'), 10) || 10;

    setCurrentPage(page);
    setPageSize(size);

    fetchRequests(`?page=${page}&page_size=${size}`);
  }, [fetchRequests]);

  // Polling for updates
  useEffect(() => {
    const interval = setInterval(() => {
      fetchRequests();
    }, 5000);

    return () => clearInterval(interval);
  }, [fetchRequests]);

  const handlePageChange = (direction) => {
    let newPage = currentPage;
    if (direction === 'next' && links.next) {
      newPage = currentPage + 1;
    } else if (direction === 'prev' && links.prev) {
      newPage = currentPage - 1;
    }
    setCurrentPage(newPage);
    fetchRequests(`?page=${newPage}&page_size=${pageSize}`);
    window.history.pushState(null, '', `?page=${newPage}&page_size=${pageSize}`);
  };

  const handleSelect = (matchRequestId) => {
    setSelectedRequest(matchRequestId);
  };

  const handleInitiate = async (matchRequestId) => {
    try {
      const response = await fetch(`${MATCH_REQUEST_URL}/match-requests/match`, {
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

      const data = await response.json();
      alert(`Match request ${matchRequestId} initiated successfully! Poll status at: ${data.polling_url}`);

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <GameImage src={req.gameImage} alt={`${req.gameName} thumbnail`} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0', fontSize: '1.2rem', color: '#00ffff' }}>{req.gameName}</h3>
                <p style={{ margin: '4px 0', color: '#ccc' }}>Status: {req.status}</p>
                <p style={{ margin: '4px 0', color: '#ccc' }}>Expires on: {req.expireDate}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                {req.status === 'matching' ? (
                  <div style={{ color: '#00ff00', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    ✅ <span>Initiated</span>
                  </div>
                ) : req.initiated ? (
                  <div style={{ color: '#00ff00', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    ✅ <span>Initiated</span>
                  </div>
                ) : (
                  <Button onClick={() => handleInitiate(req.matchRequestId)}>Initiate</Button>
                )}
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button onClick={() => handlePageChange('prev')} disabled={!links.prev}>
          Previous
        </Button>
        <Button onClick={() => handlePageChange('next')} disabled={!links.next}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default MatchHistory;
