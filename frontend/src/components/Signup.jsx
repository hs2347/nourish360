import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
     setError('');
    try {
      const { data } = await axios.post('/api/auth/signup', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Redirect or update state
    } catch (err) {
      // Handle error
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;