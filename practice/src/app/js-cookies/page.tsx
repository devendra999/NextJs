"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    const setCookie = (name, value, days) => {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // expiry in days
      document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        // Make the API call to the login endpoint
        const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
          "email" : username,
          "password" : password,
        });
  
        console.log(response, 'response')
        // Extract the access token and user from the response
        const { access_token, user } = response.data;
  
        // Save the token and user info in cookies with an expiry date of 1 hour
        setCookie('access_token', access_token, 1 / 24); // Expires in 1 hour
        setCookie('user', JSON.stringify(user), 1 / 24); // Expires in 1 hour
  
        // Redirect to the home page after successful login
        router.push('/');
      } catch (err) {
        // Handle any errors during login
        setError('Invalid username or password');
      }
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
};

export default page;
