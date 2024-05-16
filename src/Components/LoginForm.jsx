import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import './Assets/LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //USING PROMISE
    // axios.post('http://localhost:3000/login', {
    //   username,
    //   password
    // })
    // .then(res => {
    //   if (res.status == 200) {
    //     window.location.href = "/home";
    //     console.log("user found");
    //   } else {
    //     console.error("login failed");
    //   }
    // })
    // .catch(err => {
    //   console.error("error: ", err);
    // });

    //USING TRY CATCH
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Redirect only if login is successful
        window.location.href = '/home';
        console.log("User found")
      } else {
        console.error("Login failed")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} required />
          <FaUser className="icon"/>
        </div>

        <div className="input-box">
          <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <FaLock className="icon"/>
        </div>

        <div className="remember-me">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="login-link">Login</button>

        <div className="register-link">
          <p>Don't have an account? <NavLink to="/register" className="register-click">Register</NavLink></p>
        </div>
        
      </form>
    </div>
  )
}
