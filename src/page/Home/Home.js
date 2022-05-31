import React from 'react';
import About from './About';
import Products from './Services/Products';
import Slider from './Slider/Slider';

const Home = () => {
  return (
    <div>
     <Slider/>
     <About/>
     <Products/>
    </div>
  );
};

export default Home;