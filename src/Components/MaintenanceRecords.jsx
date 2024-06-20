import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';

export const MaintenanceRecords = ({ userId }) => {
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


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

    const fetchMaintenanceRecords = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/maintenance/${userId}`)
        setMaintenanceRecords(res.data);
        setLoading(false)
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    checkLoginStatus();
    fetchMaintenanceRecords();
  }, [userId])

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
    <div>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout}/>
      <div className="content">
        <h1>Maintenance Records</h1>
          {maintenanceRecords.length === 0 ? (<p>No maintenance records</p>)
          :
          (
            <ul>
              {maintenanceRecords.map(record => (
                <li key={record.id}>
                  <p>Service: {record.service}</p>
                </li>
              ))}
            </ul>
          )
          }
      </div>
    </div>
  )
}
