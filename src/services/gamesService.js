const BASE_URL = 'http://localhost:8000'; // Update with your actual backend URL

export const fetchGames = async ({
  page = 1,
  pageSize = 20,
  title = null,
  gameId = null,
  genre = null
} = {}) => {
  try {
    // Build query parameters
    const params = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    if (title) params.append('title', title);
    if (gameId) params.append('gameId', gameId);
    if (genre) params.append('genre', genre);

    const response = await fetch(`${BASE_URL}/games?${params}`);

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

    const response = await fetch(`${BASE_URL}/games?${params}`);
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
    const response = await fetch(`${BASE_URL}/games/${userId}/${gameId}`, {
      method: 'PUT',
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