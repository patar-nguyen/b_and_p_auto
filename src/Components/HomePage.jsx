import React, { useState, useEffect } from 'react';
import './Assets/HomePage.css';
import axios from 'axios';
import { Navbar } from './Navbar';

export const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get("http://localhost:3000/login");
        if (res.data.loggedIn) {
          setLoggedIn(true);
          setUser(res.data.user);
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      } catch (err) {
        console.error("Error checking login status:", err);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mainBody">
        {loggedIn ? (
          <p>Welcome, {user.username}!</p>
        ) : (
          <p>Please log in.</p>
        )}
      </div>
    </div>
  );
};
