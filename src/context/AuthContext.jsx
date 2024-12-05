import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { validateGoogleToken, logoutFromBackend } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Get the ID token
          const idToken = await firebaseUser.getIdToken();
          // Validate with your backend
          const { access_token } = await validateGoogleToken(idToken);
          
          // Store user info and tokens
          const userData = {
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            accessToken: access_token,
            idToken: idToken,
          };
          
          // Save to session storage
          sessionStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        } catch (error) {
          console.error('Error setting up user:', error);
          sessionStorage.removeItem('user');
          setUser(null);
        }
      } else {
        sessionStorage.removeItem('user');
        setUser(null);
      }
      setLoading(false);
    });

    // Check session storage on init
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      // Get the access token before clearing everything
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const accessToken = userData?.accessToken;

      if (accessToken) {
        // Call backend logout first
        await logoutFromBackend(accessToken);
      }

      // Then sign out from Firebase
      await auth.signOut();
      
      // Clear session storage last
      sessionStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Error during sign out:', error);
      // You might want to handle this error differently
      // For now, still try to clean up the local state
      await auth.signOut();
      sessionStorage.removeItem('user');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};