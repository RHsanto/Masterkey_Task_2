import React from 'react';
import img from '../../img/p-4.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="row d-flex align-items-center py-5">
          <div className="col-lg-6">
            <div className="a-img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="a-info">
              <h1>You can find pure racing adrenaline rush and much more in my store</h1>
              <button className='btn btn-danger'>EXPLORE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;