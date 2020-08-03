import React from 'react';
import '../styles/StartPage.css';
import { BsFillStarFill } from 'react-icons/bs';
import { FaFilm, FaVideo, FaArrowLeft } from 'react-icons/fa';
import './Join.css';

function Join() {
  return (
    <div>
      <div className='container-fluid  ' style={{ height: '94vh' }}>
        <div className='row bg-primary'>
          <div className='col-12'>
            <h5 className='text-white mt-1 '>
              <FaArrowLeft className='mr-5' />
              Join meeting
            </h5>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <form className='mb-5'>
              <div className='form-group'>
                <label
                  htmlFor='name'
                  className='text-secondary mx-auto text-center'
                  style={{ display: 'block', width: '100%' }}
                >
                  Enter Meeting ID
                </label>
                <input
                  name='name'
                  type='text'
                  className='form-control text-secondary'
                  placeholder='Enter meeting Id'
                  id='name'
                  value='234-112-458'
                  onChange={() => console.log('entered')}
                  style={{ textAlign: 'center' }}
                />
              </div>
              <div className='form-group'>
                <label
                  htmlFor='phone'
                  className='text-secondary mx-auto text-center'
                  style={{ display: 'block', width: '100%' }}
                >
                  Enter Meeting Password
                </label>
                <input
                  name='phone'
                  type='password'
                  className='form-control text-secondary h4'
                  placeholder='Enter Meeting Password'
                  id='phone'
                  value='12345678'
                  onChange={() => console.log('entered')}
                  style={{
                    marginBottom: '50px',
                    textAlign: 'center',
                  }}
                />
              </div>

              <div className='m-4 d-flex align-align-items-center justify-content-between'>
                <div>
                  <h6>Video</h6>
                  <p className='mt-0 text-secondary'>Turned OFF</p>
                </div>
                <label className='switch'>
                  <input
                    type='checkbox'
                    onChange={() => console.log('entered')}
                  />
                  <span className='slider round'></span>
                </label>
              </div>
              <hr />

              <div className='m-4 d-flex align-align-items-center justify-content-between'>
                <div>
                  <h6>Audio</h6>
                  <p className='mt-0 text-secondary'>Turned ON</p>
                </div>
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked
                    onChange={() => console.log('entered')}
                  />
                  <span className='slider round'></span>
                </label>
              </div>
              <hr />

              <button className='btn btn-warning btn-block mt-2 rounded-pill p-2 '>
                Join meeting
              </button>
            </form>
          </div>
        </div>
        <div className='row bg-dark fixed-row-bottom  p-3'>
          <div className='col-4 d-flex flex-column text-center justify-content-center '>
            <h4>
              <FaFilm />
            </h4>
            <h5>Discover</h5>
          </div>
          <div className='col-4 d-flex flex-column bdr text-center justify-content-center'>
            <h4>
              <FaVideo className='text-primary' />
            </h4>
            <h6 className='text-primary'>Create Meeting</h6>
          </div>
          <div className='col-4 d-flex flex-column text-center justify-content-center'>
            <h4>
              <BsFillStarFill />
            </h4>
            <h6>LinedUp Meetings</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
