import React from 'react';
import slider1 from '../../../img/slider-1.jpg'
import slider2 from '../../../img/slider-2.jpg'
import slider3 from '../../../img/slider-3.jpg'
const Slider = () => {
  return (
    <div >
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block" alt="..."/>
     <div class="carousel-caption d-none d-md-block animate__bounceInDown animate__animated" >
     <h2 className='fw-normal' >AP-701 & UD-701N</h2>
     <h1>Unconstrained dynamism and fascinating versatility</h1>
     </div>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block animate__rollIn animate__animated">
     <h2 className='fw-normal'>AX-505</h2>
     <h1>State-of-the-art Stereo Amplifier </h1>
     </div>
    </div>
    <div class="carousel-item">
      <img src={slider3} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block animate__rotateInDownLeft animate__animated">
     <h2 className='fw-normal'>PE-505</h2>
     <h1>Fully-Balanced phono Amplifier</h1>
     </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="">Next</span>
  </button>
</div>
    </div>
  );
};

export default Slider;