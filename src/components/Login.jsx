import React from 'react';

function Login() {
  return (
    <div>
      <div className='container-fluid   bg-dark' style={{ height: '94vh' }}>
        <div className='row '>
          <div className='col-md-12 d-flex'>
            <h5 className='text-white mr-auto mt-4 ml-2  '>Back</h5>
          </div>
        </div>
        <div className='row p-3'>
          <div className='col-md-8 col-lg-4 col-sm-8 mx-auto d-flex  flex-column  '>
            <h3 className='text-white mt-5'>Login into your account</h3>
            <form>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control mt-3'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label
                  className='form-check-label text-white'
                  for='exampleCheck1'
                >
                  Remember me
                </label>
              </div>
              <button className='btn btn-secondary btn-block mt-5 rounded-pill p-2 '>
                SIGN IN
              </button>
              <button className='btn btn-primary btn-block mt-2 rounded-pill p-2 '>
                SIGN IN WITH FACEBOOK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
