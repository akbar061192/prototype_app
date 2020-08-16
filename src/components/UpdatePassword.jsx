import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

export default function UpdatePassword() {
  return (
    <div>
      <div className='container-fluid   bg-dark' style={{ height: '94vh' }}>
        <div className='row '>
          <div className='col-md-12 d-flex'>
            <h5 className='text-white mr-auto mt-4 ml-2'>
              {' '}
              <MdChevronLeft className='h3' /> Back
            </h5>
          </div>
        </div>
        <div className='row p-3'>
          <div className='col-md-8 col-lg-4 col-sm-8 mx-auto d-flex  flex-column  '>
            <h2 className='text-white mt-5'>
              Upate your <br /> password
            </h2>
            <p className='text-white mt-3 mb-5'>
              Please enter your your password.
            </p>
            <label htmlFor='pass' className='text-white'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              value='1234567890000'
              name='pass'
              onChange={() => console.log('entered')}
            />
            <input
              type='password'
              className='form-control mt-4 mb-5'
              placeholder='Confirm password'
            />
            <button className='btn btn-secondary btn-block text-uppercase mt-2 rounded-pill p-2 '>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
