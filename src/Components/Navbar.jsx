import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Assets/Navbar.css'

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(true);
  }

  const hideSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <nav>
        <ul>
          <li className="logo"><Link to="/home">B & P Auto</Link></li>
          <li className="hideOnMobile"><NavLink to="/appointment">Appointment</NavLink></li>
          <li className="hideOnMobile"><NavLink to="/login">Login</NavLink></li>
          <li className="hideOnMobile"><NavLink to="/register">Register</NavLink></li>
          <li className="menu-button" onClick={showSidebar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>

        <ul className={sidebarOpen ? "sidebar open" : "sidebar"}>
          <li onClick={hideSidebar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </ul>

    </nav>
  )
}