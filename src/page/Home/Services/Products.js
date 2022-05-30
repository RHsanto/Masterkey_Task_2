import React from 'react';
import Product1 from '../../../img/po-1.png'
import Product2 from '../../../img/po-2.png'
import Product3 from '../../../img/p-3.jpg'
import Product4 from '../../../img/p-3.png'
import Product5 from '../../../img/p-4.jpg'
import Product6 from '../../../img/p-5.jpg'
import Product7 from '../../../img/p-6.jpg'
import Product8 from '../../../img/p-1.gif'

const Products = () => {
  return (
    <div>
     <div className="container my-5">
       <h1 className='text-center py-5'>OUR BEST SALES PRODUCTS</h1>
       <div className="row g-4">
         <div className="col-lg-3 ">
           <div className="product">
           <img src={Product1} alt="" />
           <h4>TV - Mi India</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $18</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
          </div>
         <div className="col-lg-3 ">
         <div className="product">
           <img src={Product2} alt="" />
           <h4 className='mt-5'>Philips
            4K UHD LED </h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $25</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
         </div>
         <div className="col-lg-3 ">
         <div className="product">
           <img src={Product3} alt="" />
           <h4>Edifier K800 Double Plug Headphone</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $20</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
         </div>
         <div className="col-lg-3">
         <div className="product">
           <img src={Product4} alt="" />
           <div className="product-info py-3">
           <h4>Takstar PS-1 Microphone Pop Screen</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $18</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
          </div>
         </div>
       </div>
       <div className="row g-4 mt-5">
         <div className="col-lg-3 ">
           <div className="product">
           <img src={Product5} alt="" />
           <h4>TV - Mi India</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $18</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
          </div>
         <div className="col-lg-3 ">
         <div className="product">
           <img src={Product6} alt="" />
           <h4 className='mt-5'>Philips
            4K UHD LED </h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $25</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
         </div>
         <div className="col-lg-3 ">
         <div className="product">
           <img src={Product7} alt="" />
           <h4>Edifier K800 Double Plug Headphone</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $20</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
         </div>
         <div className="col-lg-3">
         <div className="product">
           <img src={Product8} alt="" />
           <div className="product-info py-3">
           <h4>Takstar PS-1 Microphone Pop Screen</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora. Consequatur!</p>
           <div className="d-flex justify-content-between">
           <h5>Price: $18</h5>
           <button className='btn btn-primary'>Buy Now</button>
           </div>
           </div>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Products;
