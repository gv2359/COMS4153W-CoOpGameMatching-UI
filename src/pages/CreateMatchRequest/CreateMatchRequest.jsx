import React, { useState, useEffect } from 'react';
import { createMatchRequest, fetchMatchRequests } from '../../services/gamesService.js';
import { useParams } from 'react-router-dom';
import { Container, Form, Input, Button } from './styles';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MatchRequestPage = () => {
  const { gameId } = useParams();
  const { user } = useAuth();
  const [expireDate, setExpireDate] = useState('');

  const generateMatchRequestId = async () => {
    try {
      const response = await fetchMatchRequests({ userId: user?.idToken });
      const matchRequests = response.matchRequests || []; // Access the nested array
      const maxId = Math.max(...matchRequests.map((req) => parseInt(req.matchRequestId, 10) || 0), 0);
      return (maxId + 1).toString();
    } catch (error) {
      console.error('Error generating matchRequestId:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      // const matchRequestId = await generateMatchRequestId();
      const requestData = {
        userId: user?.idToken, // Use the user email as the ID
        gameId,
        expireDate,
      };
      
      await createMatchRequest(requestData);
      alert('Match request created successfully!');
    } catch (error) {
      console.error('Error creating match request:', error);
      alert('Failed to create match request.');
    }
  };

  return (
    <Container>
      <Form>
        <h2>Create Match Request</h2>
        <label htmlFor="expireDate">Expiration Date</label>
        <Input
          type="date"
          id="expireDate"
          value={expireDate}
          onChange={(e) => setExpireDate(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};

export default MatchRequestPage;
