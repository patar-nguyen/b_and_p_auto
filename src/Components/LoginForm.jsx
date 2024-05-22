import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Assets/LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Redirect only if login is successful
        window.location.href = '/home';
        console.log('User found');
      } else {
        setError('*Invalid username or password*');
        console.error('Login failed');
      }
    } catch (error) {
      setError('*Invalid username or password*');
      console.error('Error:', error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="remember-me">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="login-link">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <NavLink to="/register" className="register-click">
              Register
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};
