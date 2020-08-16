import React from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';

function CreateAccount() {
  return (
    <div>
      <div className='container-fluid   bg-dark' style={{ height: '94vh' }}>
        <div className='row '>
          <div className='col-md-12 d-flex'>
            <h5 className='text-white mr-auto mt-4 ml-2'>
              {' '}
              <MdChevronLeft className='h3' />
              Back
            </h5>
          </div>
        </div>
        <div className='row p-3'>
          <div className='col-md-8 col-lg-4 col-sm-8 mx-auto d-flex  flex-column  '>
            <h2 className='text-white mt-5 mb-5'>
              Create your <br /> account
            </h2>
            <form>
              <label htmlFor='name' className='text-white'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                value='Linda Doe'
                name='name'
                onChange={() => console.log('entered')}
              />
              <input
                type='text'
                className='form-control mt-4 mb-4'
                placeholder='Email'
              />
              <input
                type='text'
                className='form-control'
                placeholder='Password'
              />
              <input
                type='checkbox'
                id='vehicle1'
                name='vehicle1'
                value='Bike'
                onChange={() => console.log('checked')}
                checked
              />
              <label className='text-white mt-4 ml-2 mb-5'>
                {' '}
                You agree the terms and privacy policy{' '}
              </label>
              <button className='btn btn-secondary btn-block  rounded-pill p-2 '>
                SIGN UP
              </button>
              <hr className='bg-white' />
              <button className='btn btn-primary btn-block  rounded-pill p-2 '>
                <FaFacebook className='h4 mt-1 bg-primary' /> SIGN UP WITH
                FACEBOOK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
