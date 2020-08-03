import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function Login() {
  return (
    <div>
      <div className='container-fluid bg-dark' style={{ height: '96vh' }}>
        <div className='row '>
          <div className='col-md-12 d-flex'>
            <h5 className='text-white mr-auto mt-4 ml-2'>
              <FaLessThan className='mb-1' />
              BACK
            </h5>
          </div>
        </div>
        <div className='row p-3'>
          <div className='col-md-8 col-lg-4 col-sm-8 mx-auto d-flex flex-column'>
            <h1
              className='text-white mt-5 bg-dark h2'
              style={{ background: 'orange' }}
            >
              Log into <br /> your account
            </h1>
            <form className='mt-5'>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control mt-3'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  value='linda.doe@gmail.com'
                  onChange={() => console.log('checked')}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
                <a href='!#'>Forgot?</a>
              </div>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                  checked={true}
                  onChange={() => console.log('checked')}
                />
                <label
                  className='form-check-label text-white mb-5'
                  htmlFor='exampleCheck1'
                >
                  Remember me
                </label>
              </div>
              <div className='mt-5'>
                <button className='btn btn-secondary btn-block mt-5 rounded-pill p-2 '>
                  SIGN IN
                </button>
                <button className='btn btn-primary btn-block mt-2 rounded-pill p-2 '>
                  <FaFacebook className='mb-1' /> SIGN IN WITH FACEBOOK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
