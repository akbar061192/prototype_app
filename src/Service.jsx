import React from 'react';
import Cards from './Cards';
import Data from './Data'
const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
                {
                    Data.map((item, index) =>{
                       return <Cards img={item.img} title ={item.title} key={index}/>
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
