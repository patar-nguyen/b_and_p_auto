import React, { useState, useEffect }  from 'react'
import './Assets/HomePage.css'
import axios from 'axios';
import { Navbar } from './Navbar'

export const HomePage = () => {

  return (
    <div>
      <Navbar />
    </div>

  )
}


  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get('http://99.234.6.118:50023/useraccount?username=patar')
  //   .then(res => {
  //     console.log(res.data);
  //     setData(res.data)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])