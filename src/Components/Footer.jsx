import React from 'react';
import './Assets/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='row'>
        <div className='col'>
          <h4>CONTACT US</h4>
          <ul className="list-unstyled">
            <li>(905) 123-456</li>
            <li>info@bandp.com</li>
          </ul>
        </div>

        <div className='col'>
          <h4>Our Locations</h4>
          <ul className="list-unstyled">
            <li>123 Unknown Road</li>
            <li>Remote, ON L6K 2H4</li>
            <li>(905) 789-1011</li>
          </ul>
        </div>

        <div className='col'>
          <h4>Socials</h4>
          <FaLinkedin size={50} style={{ color: "#FFF", marginRight: '2em' }} />
          <FaGithub size={50} style={{ color: "#FFF", marginRight: '2em' }}  />
          <FaInstagram size={50} style={{ color: "#FFF" }} />
        </div>
      </div>
    </footer>
  );
}
