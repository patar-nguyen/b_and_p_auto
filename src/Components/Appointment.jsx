import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import './Assets/Appointment.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Appointment = () => {
  axios.defaults.withCredentials = true;

  let navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const services = ["Oil change", 
  "Transmission oil change", 
  "Brake change", 
  "Tire change", 
  "Tire rotation", 
  "Car wash"
];

  const [page, setPage] = useState(1);
  const [service, setService] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [vin, setVin] = useState('');
  const [plate, setPlate] = useState('');
  const [mileage, setMileage] = useState('');
  const [description, setDescription] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (page === 1) {
      setPage(2);
    } else {
    try {
      const res = await axios.post("http://localhost:3000/maintenance", {
        make,
        model,
        year,
        vin,
        plate,
        mileage,
        service,
        description
    });
      if (res.status === 200) {
        console.log("maintenance added");
        navigate("/home")

      } else {
        console.error("failed to add maintenance");
      }
    } catch (error) {
      console.error("Error occured")
    }
  }
}

  const handlePrevious = (e) => {
    e.preventDefault();
    setPage(1);
  }

  return (
    <div>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout}/>
      {loggedIn ? (
      <div className="wrap">
        <form onSubmit={handleSubmit}>

          <h1>{page === 1 ? "Enter Car Details" : "Maintenance Activity"}</h1>

          {page === 1 && (
            <>
              <div className="inputbox">
                <input type="text" placeholder="Car Make" value={make} onChange={(e)=>{setMake(e.target.value)}} required />
              </div> 

              <div className="inputbox">
                <input type="text" placeholder="Car Model" value={model} onChange={(e)=>setModel(e.target.value)} required />
              </div> 

              <div className="inputbox">
                <input type="text" placeholder="Year" value={year} onChange={(e)=>setYear(e.target.value)} required />
              </div> 

              <div className="inputbox">
                <input type="text" placeholder="VIN" value={vin} onChange={(e)=>setVin(e.target.value)} required />
              </div> 

              <div className="inputbox">
                <input type="text" placeholder="License Plate" value={plate} onChange={(e)=>setPlate(e.target.value)} required />
              </div> 

              <div className="inputbox">
                <input type="text" placeholder="Mileage" value={mileage} onChange={(e)=>setMileage(e.target.value)} required />
              </div> 
            </>
          )}

          {page === 2 && (
            <>
              <div className="inputbox">
                <select id="services" value={service} onChange={e => {setService(e.target.value)}}>
                  <option value="">--Select--</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div> 

              <div className="description">
                <textarea type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} required />
              </div> 
            </>
          )}
          
          <button type="submit">{page === 1 ? "Next" : "Submit"}</button>
          {page === 2 && <button onClick={handlePrevious} className="prevbox">Previous</button>}

        </form>
      </div>
      ) : (
        <p>Please login to see this page</p>
      )}
    </div>
)}
