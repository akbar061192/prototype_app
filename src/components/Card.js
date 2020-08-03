import React from 'react';
import '../styles/StartPage.css';
import { BsFillStarFill } from 'react-icons/bs';
import { FaFilm, FaUsb, FaVideo, FaCheck } from 'react-icons/fa';
import { MdSchedule, MdEmail, MdContacts, MdSettings } from 'react-icons/md';
import cardImg from './card.jpeg';

function Card() {
  return (
    <div className='bg-white'>
      <div className='container-fluid mb-5' style={{ height: '94vh' }}>
        <div className='row mb-5 '>
          <div className='col-md-12'>
            <h5 className='text-dark text-center mt-2  mb-4 ml-0 '>
              <img
                src={cardImg}
                alt=''
                width='110px'
                className='m-2 p-2 bg-warning'
                style={{ borderRadius: '50%' }}
              />
              <span>
                Hi, Rohit Kumar <FaCheck className=' bg-success rounded p-1' />
              </span>
            </h5>
          </div>
        </div>
        <div className='row mt-5  d-flex justify-content-center align-content-center'>
          <div
            className='card  col-5 bg-dark m-1'
            style={{ height: '100px', width: '200px' }}
          >
            {' '}
            <h5 className='text-secondary'>
              <FaUsb />
            </h5>
            <p className='text-white text-center'>Insta Meeting</p>
            <button className='btn mb-2 btn-sm btn-warning  rounded-pill p-0 '>
              Create
            </button>
          </div>
          <div
            className='card col-5 bg-dark m-1'
            style={{ height: '100px', width: '200px' }}
          >
            <h5 className='text-secondary'>
              <FaVideo />
            </h5>
            <p className='text-white text-center '>Join Meeting</p>
            <button className='btn btn-sm btn-warning  rounded-pill p-0 '>
              Now
            </button>
          </div>
          <div
            className='card col-5 bg-dark m-1'
            style={{ height: '100px', width: '200px' }}
          >
            <h3 className='text-secondary'>
              <MdSchedule />
            </h3>
            <p className='text-white text-center mb-1 '>Schedule</p>
            <button className='btn btn-sm btn-primary  rounded-pill p-0 '>
              Create
            </button>
          </div>
          <div
            className='card col-5 bg-dark m-1'
            style={{ height: '100px', width: '200px' }}
          >
            <h3 className='text-secondary'>
              <MdEmail />
            </h3>
            <p className='text-white text-center mb-1'>MyMeeting</p>
            <button className='btn btn-sm btn-primary  rounded-pill p-0 '>
              Check
            </button>
          </div>
          <div
            className='card col-5 bg-dark m-1'
            style={{ height: '100px', width: '200px' }}
          >
            <h5 className='text-secondary'>
              <MdContacts />
            </h5>
            <p className='text-white text-center mb-1'>My Contacts</p>
            <button className='btn btn-sm btn-primary  rounded-pill p-0 '>
              Create
            </button>
          </div>
          <div
            className='card col-5 bg-dark m-1'
            style={{ height: '100px', width: '200px' }}
          >
            <h5 className='text-secondary'>
              <MdSettings />
            </h5>
            <p className='text-white text-center mb-1 '>Account Setting</p>
            <button className='btn btn-sm btn-primary  rounded-pill p-0 '>
              Fix
            </button>
          </div>
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
  );
}

export default Card;
