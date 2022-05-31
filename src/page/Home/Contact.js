import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
const Contact = () => {
  return (
    <div>
      <div className="container py-5">
      <h1 className='text-center pb-5'>Contact Us</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-form">
          <div class="form-floating mb-3">
           <input type="text" class="form-control" id="floatingInput" placeholder="name"/>
           <label for="floatingInput">Username</label>
       </div>  <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name"/>
           <label for="floatingInput">Email</label>
       </div>  
       <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>

      <button type="submit" className='btn btn-primary my-5'>Submit</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-info shadow p-5 w-75 h-75 mx-auto">
            <h5><ImLocation2/> Dhaka, Bangladesh</h5>
            <h5><BsTelephoneFill/> +0188745235</h5>
            <h5><GrMail/> market123@gmail.com</h5>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;