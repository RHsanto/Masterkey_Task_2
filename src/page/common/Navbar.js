import React from 'react';
import { Link } from 'react-router-dom';
import {SiMarketo} from "react-icons/si";
import {RiBarChartHorizontalLine} from "react-icons/ri";
import './common.css'
const Navbar = () => {
  return (
    <div className='menu-section'>
      <div className="container">
        <div className="d-none d-lg-flex justify-content-between align-items-center menu-bar">
          <div className="logo text-light">
            <h2>MARKET <SiMarketo/></h2>
          </div>
          <div className=" d-flex align-items-center">
            <div className="menu">
          <Link to='/'><li>HOME</li></Link>
          <Link to='/about'><li>ABOUT</li></Link>
          <Link to='/product'><li>PRODUCTS</li></Link>
          <Link to='/blog'><li>BLOG</li></Link>
          <Link to='/contact'><li>CONTACT US</li></Link>
            </div>

            <div>
           <Link to='/log-in'><button className='login'>LOGIN</button></Link>
           <Link to='/sign-up'> <button className='signup'>SIGNUP</button></Link>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className=" text-light d-flex d-lg-none py-2 justify-content-between">
          <div className="logo">
          <h2>MARKET <SiMarketo/></h2>
          </div>
          <div>
         
          <a class="btn text-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <RiBarChartHorizontalLine className='fs-2'/>
          </a>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title text-dark" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
     aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
   <Link to='/'><li class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close">HOME</li></Link>
   <Link to='/about'><li class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close">ABOUT</li></Link>
   <Link to='/product'><li class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close">PRODUCTS</li></Link>
   <Link to='/blog'><li class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close">BLOG</li></Link>
   <Link to='/contact'><li class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close">CONTACT US</li></Link>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;