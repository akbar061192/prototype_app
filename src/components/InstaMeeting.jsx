import React from 'react';
import '../styles/StartPage.css';
import { FaVideo, FaFilm } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { MdAddCircleOutline } from 'react-icons/md';

function InstaMeeting() {
  return (
    <div>
      <div className='container-fluid' style={{ height: '94vh' }}>
        <div className='row bg-warning'>
          <div className='col-md-12 d-flex flex-column'>
            <h5 className='text-white mr-auto mt-2 ml-2'>Insta Meeting</h5>
            <div className='form-group'>
              <input
                type='text'
                className='form-control mt-3 text-center'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Search'
                style={{ borderRadius: '1rem' }}
              />
            </div>
          </div>
        </div>
        <div className='row bg-white'>
          <div className='col-12'>
            <p className='text-secondary my-3 h5'>Configuration</p>
          </div>
          <div className='col ml-4'>
            <ul className='no-bullets'>
              <li>
                <div className='d-flex align-align-items-center justify-content-between'>
                  <div>
                    <h5>Video</h5>
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
              </li>
              {/* <hr /> */}
              <li>
                <div className='d-flex align-align-items-center justify-content-between'>
                  <div>
                    <h5>Recording</h5>
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
              </li>
              <hr />
              <li>
                <div className='d-flex align-align-items-center justify-content-between'>
                  <div>
                    <h5>Video Sharing</h5>
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
              </li>
              {/* <hr /> */}
              <li>
                <div className='d-flex align-align-items-center justify-content-between'>
                  <div>
                    <h5>Video Type</h5>
                    <p className='mt-0 text-secondary'>Video Mode :Multiple</p>
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
              </li>
              <hr />
              <li>
                <div className='d-flex align-align-items-center justify-content-between'>
                  <div>
                    <h5>Total Participants</h5>
                    <p className='mt-0 text-secondary'>Total Participants: 0</p>
                  </div>
                  <MdAddCircleOutline className='h3 mr-4 mt-2' />
                </div>
              </li>
              <hr />
            </ul>
          </div>
          <button className='btn btn-warning btn-block mb-0 text-capitalize rounded-pill'>
            Start Meeting
          </button>
        </div>

        <div className='row bg-dark p-2 fixed-row-bottom'>
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

export default InstaMeeting;
