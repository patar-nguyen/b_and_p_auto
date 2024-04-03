import React, { useState } from 'react'
import { Navbar } from './Navbar'
import './Assets/Appointment.css'

export const Appointment = () => {
  const [showWrap, setShowWrap] = useState(true);

  const [secPage, setSecPage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWrap(false);
    setSecPage(true);
  }
  return (
    <div>
      <Navbar />
      {showWrap && (<div className="wrap">
        <form onSubmit={handleSubmit}>

          <h1>Enter Make & Model</h1>

          <div className="inputbox">
            <input type="text" placeholder="Car Make" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Car Model" required />
          </div> 

          <button type="submit">Next</button>

        </form>
      </div>)}

    {secPage && (
      <div className="wrap">
        <form>
        <h1>Enter Year</h1>

          <div className="inputbox">
            <input type="text" placeholder="Car Make" required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Car Model" required />
          </div> 

          <button type="submit">Next</button>
        </form>
      </div>
)}
    </div>
  )
}
