import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Assets/RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";

export const RegisterForm = () => {
  
  const provinces = ["NL", "PE", "NS", "NB", "QC", "ON", "MB", "SK", "AB", "BC", "YT", "NT", "NU"];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');


  const onSubmitForm = (e) => {
    e.preventDefault();
    // axios.post("", {username, password, email, firstName, lastName, birthdate, address, city, province, zip, country})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    console.log(`${firstName} ${lastName} is my name`)
  }

  return (
    <div className="wrapper2">
      <form onSubmit={onSubmitForm}>
        <h1>Register</h1>

        <div className="input-box2">
          <input type="text" placeholder="Username" value={username} onChange={e => {setUsername(e.target.value)}}required />
          <FaUser className="icon"/>
        </div>

        <div className="input-box2">
          <input type="text" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}}required />
          <FaLock className="icon"/>
        </div>

        <div className="input-box2">
          <input type="text" placeholder="Email" value={email} onChange={e => {setEmail(e.target.value)}} required />
        </div>


        <div className="input-box2">
          <input type="text" placeholder="First Name" value={firstName} onChange={e => {setFirstName(e.target.value)}} required />
        </div>


        <div className="input-box2">
          <input type="text" placeholder="Last Name" value={lastName} onChange={e => {setLastName(e.target.value)}} required />
        </div>


        <div className="input-box2">
          <input type="text" placeholder="Date of Birth" value={birthdate} onChange={e => {setBirthdate(e.target.value)}} required />
        </div>


        <div className="input-box2">
          <input type="text" placeholder="Street Address" value={address} onChange={e => {setAddress(e.target.value)}}/>
        </div>

        <div className="input-box2">
          <input type="text" placeholder="City" value={city} onChange={e => {setCity(e.target.value)}} />
        </div>

        <div className="input-box2">
          <select id="province" value={province} onChange={e => {setProvince(e.target.value)}}>
            <option value="">--Select--</option>
            {provinces.map((province) => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
        </div>

        <div className="input-box2">
          <input type="text" placeholder="Zip Code" value={zip} onChange={e => {setZip(e.target.value)}} required />
        </div>

        <div className="input-box2">
          <input type="text" placeholder="Country" value={country} onChange={e => {setCountry(e.target.value)}}required />
        </div>

        <button type="submit">Register</button>

        <div className="register-link">
          <p>Already have an account? <NavLink to="/login">Sign In</NavLink></p>
        </div>
        
      </form>
    </div>
  )
}
