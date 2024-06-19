import React, { useState, useEffect } from 'react';
import './Assets/HomePage.css';
import axios from 'axios';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import serviceImage from '../assets/services.png';
import bandp from '../assets/bandp.jpeg';
import r34 from'../assets/r34.jpeg';


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

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/logout");
      if (res.status === 200) {
        setLoggedIn(false);
        setUser(null);
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout", err);
    }
  }

  return (
    <div className="home-container">
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <div className="mainBody">
        <h1 className="services-heading">Our Services</h1>

        {loggedIn ? (
          <>
            <img src={serviceImage} alt="Logged in" className="service-image" />

          </>
        ) : (
          <>
            <img src={serviceImage} alt="Logged in" className="service-image" />


          </>
        )}

        <h1 className="services-heading2">About Us</h1>
        <div className="about-us-container">
          <img src={bandp} alt="About Us" className="about-us-image" />
          <p>Brian and Patrick have been inseparable since high school, bonding over their mutual fascination with engines,
            gears, and the thrill of the open road. Their friendship, fueled by countless hours spent in garages and racetracks,
            naturally evolved into a business partnership. With a combined experience of over 20 years in the auto repair industry,
            they decided to take the leap and open B & P Auto, a place where they could bring their expertise and love for
            cars to their community.</p>
        </div>

        <h1 className="services-heading2">Our Mission</h1>
        <div className="mission-container">
        <p>At B & P Auto, our mission is simple: to provide top-notch auto repair and maintenance services with a personal touch.
          We believe in treating every car as if it were our own and every customer like a friend. Our goal is to ensure that you
          leave our shop with a smile, knowing that your vehicle is in the best possible hands.
        </p>
        <img src={r34} alt="About Us" className="mission-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
