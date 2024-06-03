import React, { useState } from 'react';
import { Navbar } from './Navbar';
import './Assets/Appointment.css';
import axios from 'axios';


export const Appointment = () => {
  axios.defaults.withCredentials = true;

//   const services = ["Oil change", 
//   "Transmission oil change", 
//   "Brake change", 
//   "Tire change", 
//   "Tire rotation", 
//   "Car wash"
// ];

  // const [firstPage, setFirstPage] = useState(true);
  // const [secPage, setSecPage] = useState(false);

  // const [service, setService] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  // const [year, setYear] = useState('');
  // const [vin, setVin] = useState('');
  // const [plate, setPlate] = useState('');
  // const [mileage, setMileage] = useState('');
  // const [description, setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/maintenance", {
      make,
      model
    });
      if (res.status === 200) {
        console.log("maintenance added");
      } else {
        console.error("failed to add maintenance");
      }
    } catch (error) {
      console.error("Error occured")
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFirstPage(false);
  //   setSecPage(true);
  // }

  const handlePrevious = (e) => {
    e.preventDefault();
    setFirstPage(true);
    setSecPage(false);
  }
  return (
    <div>
      <Navbar />
      <div className="wrap">
        <form onSubmit={handleSubmit}>

          <h1>Enter Car Details</h1>

          <div className="inputbox">
            <input type="text" placeholder="Car Make" value={make} onChange={(e)=>{setMake(e.target.value)}} required />
          </div> 

          <div className="inputbox">
            <input type="text" placeholder="Car Model" value={model} onChange={(e)=>setModel(e.target.value)} required />
          </div> 
{/* 
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
          </div>  */}

          <button type="submit">Next</button>

        </form>
      </div>

    {/* {secPage && (
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

          <div className="description">
            <textarea type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} required />
          </div> 

          <button type="submit">Next</button>
          <button onClick={handlePrevious} className="prevbox">Previous</button>

        </form>
      </div>
    )} */}
    </div>
)}
