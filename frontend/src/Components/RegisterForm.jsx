import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Assets/RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

export const RegisterForm = () => {
  
  const provinces = ["NL", "PE", "NS", "NB", "QC", "ON", "MB", "SK", "AB", "BC", "YT", "NT", "NU"];

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');


  const onSubmitForm = (e) => {
    e.preventDefault();
    var userAccount = {
      "userName": userName,
      "password": password,
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "dateOfBirth": dateOfBirth,
      "street": street,
      "city": city,
      "province": province,
      "zipcode": zipcode,
      "country": country
    }
    console.log(JSON.stringify(userAccount));
    axios.post("http://99.234.6.118:50023/UserAccount", 
    JSON.stringify(userAccount), 
    {headers: { "Content-Type": "application/json"}})
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data))
  }

  return (
    <div className="wrapper2">
      <form onSubmit={onSubmitForm}>
        <h1>Register</h1>

        <div className="input-box2">
          <input type="text" placeholder="Username" value={userName} onChange={e => {setUserName(e.target.value)}}required />
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
          <input type="text" placeholder="Date of Birth" value={dateOfBirth} onChange={e => {setDateOfBirth(e.target.value)}} required />
        </div>


        <div className="input-box2">
          <input type="text" placeholder="Street Address" value={street} onChange={e => {setStreet(e.target.value)}}/>
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
          <input type="text" placeholder="Zip Code" value={zipcode} onChange={e => {setZipcode(e.target.value)}} required />
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
