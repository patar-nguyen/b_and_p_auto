import React, { useState } from 'react'
import { Navbar } from './Navbar'
import './Assets/Appointment.css'

export const Appointment = () => {
  const services = ["Oil Change", "Brake Change"];

  const [service, setService] = useState("");
  const [firstPage, setFirstPage] = useState(true);

  const [secPage, setSecPage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstPage(false);
    setSecPage(true);
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    setFirstPage(true);
    setSecPage(false);
  }
  return (
    <div>
      <Navbar />
      {firstPage && (<div className="wrap">
        <form onSubmit={handleSubmit}>

          <h1>Enter Car Details</h1>

          <div className="inputbox">
            <input type="text" placeholder="Car Make" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Car Model" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Year" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="VIN" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="License Plate" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Mileage" required />
          </div> 

          <button type="submit">Next</button>

        </form>
      </div>)}

    {secPage && (
      <div className="wrap">
        <form>
        <h1>Maintenance Activity</h1>

          <div className="inputbox">
            <select id="services" value={service} onChange={e => {setService(e.target.value)}}>
              <option value="">--Select--</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Description" required />
          </div> 

          <button type="submit">Next</button>
          <button onClick={handlePrevious} className="prevbox">Previous</button>

        </form>
      </div>
    )}
    </div>
)}
