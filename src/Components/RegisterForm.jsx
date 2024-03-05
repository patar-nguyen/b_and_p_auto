import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Assets/RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const provinces = ["NL, PE, NS, NB, QC, ON, MB, SK, AB, BC, YT, NT, NU"];


export const RegisterForm = () => {

  const [selectedProvince, setSelectedProvince] = useState('');


  const handleChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  return (
    <div className="background">
      <div className="wrapper">
        <form action="">
          <h1>Register</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon"/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Password" required />
            <FaLock className="icon"/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>


          <div className="input-box">
            <input type="text" placeholder="First Name" required />
          </div>


          <div className="input-box">
            <input type="text" placeholder="Last Name" required />
          </div>


          <div className="input-box">
            <input type="text" placeholder="Date of Birth" required />
          </div>


          <div className="input-box">
            <input type="text" placeholder="Street Address" required />
          </div>

          <div className="input-box">
            <input type="text" placeholder="City" required />
          </div>

          <div className="input-box">
          <select id="province" value={selectedProvince} onChange={handleChange}>
        <option value="">--Select--</option>
        {provinces.map((province) => (
          <option key={province} value={province}>{province}</option>
        ))}
      </select>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Zip Code" required />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Country" required />
          </div>


          <button type="submit">Register</button>

          <div className="register-link">
            <p>Already have an account? <NavLink to="/login">Sign In</NavLink></p>
          </div>
          
        </form>
      </div>
    </div>
  )
}
