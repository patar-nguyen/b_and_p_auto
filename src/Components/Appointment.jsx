import React from 'react'
import { Navbar } from './Navbar'
import './Assets/Appointment.css'

export const Appointment = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap">
        <form action="">

          <h1>Enter Car Details</h1>

          <div className="inputbox">
            <input type="text" placeholder="Car Make" required />
          </div> 
          
          <div className="inputbox">
            <input type="text" placeholder="Car Model" required />
          </div> 

          <button type="submit">Next</button>

        </form>
      </div>
    </div>
  )
}
