const BASE_URL = 'http://localhost:8000'; // Update with your actual backend URL

export const fetchGames = async ({
  page = 1,
  pageSize = 20,
  title = null,
  gameId = null,
  genre = null
} = {}) => {
  try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    // Build query parameters
    const params = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    if (title) params.append('title', title);
    if (gameId) params.append('gameId', gameId);
    if (genre) params.append('genre', genre);

    const response = await fetch(`${BASE_URL}/games?${params}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const searchGames = async (title) => {
  try {
    const params = new URLSearchParams({
      title: title,
      page_size: 100
    });

      const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    const response = await fetch(`${BASE_URL}/games?${params}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching games:', error);
    throw error;
  }
};


export const updateFavoredGame = async (userId, gameId) => {
  try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    const response = await fetch(`${BASE_URL}/favourite`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      body: {"gameId" : gameId}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating favored game:', error);
    throw error;
  }
};


export const createMatchRequest = async (requestData) => {
  try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    const response = await fetch(`${BASE_URL}/match-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating match request:', error);
    throw error;
  }
};


export const startMatch = async ({ MatchRequestId }) => {
  try {
    const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    const response = await fetch(`${BASE_URL}/match-requests/match`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ MatchRequestId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error starting match:', error);
    throw error;
  }
};

export const fetchMatchStatus = async (matchRequestId) => {
  try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    const response = await fetch(`${BASE_URL}/match/status/${matchRequestId}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching match status:', error);
    throw error;
  }
};

// export const fetchMatchRequests = async ({ userId, page = 1, pageSize = 10 }) => {
//   try {
//     const params = new URLSearchParams({
//       // user_id: userId,
//       page: page.toString(),
//       page_size: pageSize.toString(),
//     });
//     console.log('fetchMatchRequests params:', params);
//     const response = await fetch(`${BASE_URL}/match-requests?${params}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('fetchMatchRequests:', data);

//     return {
//       matchRequests: data.matchRequests || [],
//       links: data.links || {},
//       total: data.total || 0, // Assuming "total" is available for pagination
//     };
//   } catch (error) {
//     console.error('Error fetching match requests:', error);
//     throw error;
//   }
// };
export const fetchMatchRequests = async ({ userId, url = null, page = 1, pageSize = 10 }) => {
  try {
    const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;
    const endpoint = url || `${BASE_URL}/match-requests?${new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    })}`;

    console.log('fetchMatchRequests endpoint:', endpoint);

    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    console.log('fetchMatchRequests response:', response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('fetchMatchRequests response:', data);

    return {
      matchRequests: data.matchRequests || [],
      links: data.links || {},
      total: data.total || 0,
    };
  } catch (error) {
    console.error('Error fetching match requests:', error);
    throw error;
  }
};


export const fetchGameDetails = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${gameId}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      });
    if (!response.ok) {
      if (response.status === 500) {
        console.warn(`Game with ID ${gameId} not found.`);
        // default object for missing games
        return {
          gameId: gameId,
          title: 'Unknown Game',
          details: 'This game does not exist.',
          image: "",
        };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
};