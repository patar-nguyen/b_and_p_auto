import React from 'react'
import { Link } from 'react-router-dom';
import './Assets/Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">

        <Link to="/home" className="logo">B & P Auto</Link>

        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

    </nav>
  )
}