//TODO: modify later
const BASE_URL = 'http://localhost:8001';

export const validateGoogleToken = async (idToken) => {
  try {
    const response = await fetch(`${BASE_URL}/login-google`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to validate token');
    }

    return await response.json();
  } catch (error) {
    console.error('Error validating token:', error);
    throw error;
  }
};

export const logoutFromBackend = async (accessToken) => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to logout from backend');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };