/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import signup from '../../img/sign-up.jpg'
const Signup = () => {


  return (
    <div className='signUp-section'>
    <div className="container">
      <div className="row g-5 d-flex align-items-center py-5">
       <div className="col-lg-6 ">
         {/* for window */}
        <div className=" w-75 p-5 mx-auto shadow bg-light d-none d-lg-block">
           
           <div class="form-floating mb-3">
               <input type="text"  class="form-control" id="floatingInput" placeholder="name"/>
               <label for="floatingInput">Username</label>
               
           </div>
            <div class="form-floating mb-3">
               <input type="email"  class="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label for="floatingInput">Email</label>
           </div>
            <div class="form-floating mb-3">
               <input type="password"  class="form-control" id="floatingPassword" placeholder="Password"/>
               <label for="floatingPassword">Password</label>
            </div>
           
             <div className=" w-25 mt-5  mx-auto">
               <button type='submit' className='btn btn-primary'>LOGIN</button>
             </div>
        
           
         
     {/* here end sign up form */}

      
      {/* signup link */}
        <p className="text-center mt-4">I'm already a member?
         <Link to='/log-in'> Sign in</Link></p>
       </div>

         {/* for mobile device*/}
        <div className="logIn-form  px-4 py-5 mx-auto shadow bg-light d-block d-lg-none">
        
        <div class="form-floating mb-3">
           <input type="text" class="form-control" id="floatingInput" placeholder="name"/>
           <label for="floatingInput">Username</label>
       </div>
        <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Email</label>
       </div>
        <div class="form-floating">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
           <label for="floatingPassword">Password</label>
        </div>
        <div className="d-flex justify-content-between mt-3 ">
           <p><input type="checkbox" name="" id="" /> Remember me </p>
           <p className='text-primary'>Forget Password?</p>
         </div>
         <div className="log-btn w-50 mx-auto  mt-4 ">
           <button className='btn btn-primary'>LOGIN</button>
         </div>
    {/* signup link */}
    <p className="text-center mt-4"> Not a member? <Link to='/sign-up'> Signup now</Link></p>
        </div>
     
       </div>
       <div className="col-lg-6">
        <img src={signup} alt="" className='s-img' />
       </div>
      </div>
    </div>
  </div>
  );
};

export default Signup;