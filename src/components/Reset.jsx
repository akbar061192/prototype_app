import React from 'react';
import cardImg from './card.jpeg';
import { FaLessThan } from 'react-icons/fa';

function Reset() {
  return (
    <div>
      <div className='container-fluid   bg-dark' style={{ height: '94vh' }}>
        <div className='row '>
          <div className='col-md-12 d-flex'>
            <h5 className='text-white mr-auto mt-4 ml-2 '>
              <FaLessThan className='mb-1' /> Back
            </h5>
          </div>
        </div>
        <div className='row mt-5 text-center'>
          <div className='col-12'>
            <img
              src={cardImg}
              alt=''
              width='110px'
              className='m-2 p-2 bg-success'
              style={{ borderRadius: '50%' }}
            />
            <h2 className='text-white'>Hello Sam</h2>
            <p className='text-white'>Your password has been reset</p>
          </div>
        </div>
        <button className='btn btn-primary btn-block mt-5 rounded-pill p-2 '>
          START ATTENDING CLASSES
        </button>
      </div>
    </div>
  );
}

export default Reset;
