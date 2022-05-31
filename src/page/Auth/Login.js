/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../../img/log-in.png'
const Login = () => {


  return (
    <div className='signIn-section'>
    <div className="container">
      <div className="row g-5 d-flex align-items-center py-5">
       <div className="col-lg-6 ">
         {/* for window */}
        <div className="logIn-form w-75 p-5 mx-auto shadow bg-light d-none d-lg-block">
        {/* here start sign up form  */}
           
            <div class="form-floating mb-3">
               <input type="email"  class="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label for="floatingInput">Email</label>
           </div>
            <div class="form-floating mb-3">
               <input type="password"  class="form-control" id="floatingPassword" placeholder="Password"/>
               <label for="floatingPassword">Password</label>
            </div>
  
             <div className="log-btn w-25 mt-5  mx-auto">
               <button className='btn btn-primary' type='submit'>LOGIN</button>
             </div>
        
    
      {/* signup link */}
        <p className="text-center mt-4">Not a member?
         <Link to='/sign-up'> Sign Up</Link></p>
       </div>

         {/* for mobile device*/}
        <div className=" px-4 py-5 mx-auto shadow bg-light d-block d-lg-none">
        
        <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Email</label>
       </div>
        <div class="form-floating">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
           <label for="floatingPassword">Password</label>
        </div>
       
         <div className=" w-50 mx-auto  mt-4 ">
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

export default Login;