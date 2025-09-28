import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUserInfo(data);
      return data;
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data.message : error.message);
      throw error;
    }
  };

  const signup = async (email, password) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUserInfo(data);
        return data;
    } catch (error) {
        throw new Error(error.response.data.message || 'An error occurred during signup.');
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};