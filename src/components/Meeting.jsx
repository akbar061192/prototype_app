import React from 'react';
import { FaVideo } from 'react-icons/fa';
import '../styles/StartPage.css';

import { BsFillStarFill, BsFillChatSquareFill } from 'react-icons/bs';
function Meeting() {
  return (
    <div>
      <div className='container-fluid  ' style={{ height: '94vh' }}>
        <div className='row bg-warning'>
          <div className='col-12'>
            <h5 className='text-white  m-4  text-center  '>Meeting Room</h5>
          </div>
          <video width='100%' height='200' controls>
            <source src='..Videos/video1.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='row bg-dark'>
          <div className='col-12 d-flex flex-row'>
            <h2 className='text-white mr-4'>
              <FaVideo />{' '}
            </h2>
            <h2 className='text-white  mr-4'>
              <FaVideo />{' '}
            </h2>
            <h2 className='text-white  mr-4'>
              <FaVideo />{' '}
            </h2>
            <h2 className='text-white  mr-4'>
              <FaVideo />{' '}
            </h2>
            <h2 className='text-white  mr-4'>
              <FaVideo />{' '}
            </h2>
            <h2 className='text-white  mr-4'>
              <FaVideo />{' '}
            </h2>
          </div>
        </div>
        <div className='row bg-dark fixed-row-bottom  p-3'>
          <div className='col-4 d-flex flex-column '>
            <h5>
              <BsFillChatSquareFill />
            </h5>
            <h6>Discover</h6>
          </div>
          <div className='col-4 d-flex flex-column bdr'>
            <h2>
              <FaVideo />
            </h2>
            <h6>Create Meeting</h6>
          </div>
          <div className='col-4 d-flex flex-column'>
            <h5>
              <BsFillStarFill />
            </h5>
            <h6>LinedUp Meetings</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
