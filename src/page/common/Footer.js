import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram,FaFacebookF ,FaYoutube} from "react-icons/fa";
import {SiMarketo} from "react-icons/si";
import './common.css'
const Footer = () => {
  return (
    <div className='footer'>
     <div className="container">
       <div className="row">
         <div className="col-lg-4">
          <h2>MARKET <SiMarketo/></h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero vel numquam officia
                nobis in esse odio consectetur libero vitae ab.</p>
              <div className="d-flex social-icons gap-3">
               <li className='instagram'><FaInstagram/></li>
               <li className='facebook'><FaFacebookF/></li>
               <li className='youtube'><FaYoutube/></li>
              </div>
         </div>
         <div className="col-lg-2">
         <h5>Active Link</h5>
              <div>
               <li><Link to='/#'>ABOUT</Link> </li>
               <li><Link to='/#'>PRODUCTS</Link> </li>
               <li><Link to='/#'>BLOG</Link> </li>
               <li><Link to='/#'> CONTACT US</Link></li>
              </div>
         </div>
         <div className="col-lg-2">
         <h5>Active Link</h5>
              <div>
               <li><Link to='/#'>SIGN UP</Link> </li>
               <li><Link to='/#'>LOG IN</Link> </li>
               <li><Link to='/#'> ADVERTISE</Link></li>
              </div>
         </div>
         <div className="col-lg-3">
           <h4>Search</h4>
           <input type="search" name="" id="" />
         </div>
         
       </div>
     </div>
    </div>
  );
};

export default Footer;