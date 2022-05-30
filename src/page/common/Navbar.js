import React from 'react';
import { Link } from 'react-router-dom';
import './common.css'
const Navbar = () => {
  return (
    <div className='menu-section'>
      <div className="container">
        <div className="d-none d-lg-flex justify-content-between align-items-center menu-bar">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <div className=" d-flex align-items-center">
            <div className="menu">
          <Link to='/'><li>HOME</li></Link>
          <Link to='#'><li>ABOUT</li></Link>
          <Link to='#'><li>SERVICES</li></Link>
          <Link to='#'><li>BLOG</li></Link>
          <Link to='#'><li>CONTACT US</li></Link>
            </div>

            <div>
             <button className='login'>LOGIN</button>
             <button className='signup'>SIGNUP</button>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className="d-flex d-lg-none">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;