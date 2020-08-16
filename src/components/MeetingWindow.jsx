import React from 'react';
import { FaVideo, FaFilm } from 'react-icons/fa';
import '../styles/StartPage.css';
import { BsFillStarFill, BsChatFill, BsMicMuteFill } from 'react-icons/bs';
import {
  MdVolumeUp,
  MdLoop,
  MdVideocamOff,
  MdPeople,
  MdCallEnd,
} from 'react-icons/md';
import cardImg from './card.jpeg';
import video from './animal.mp4';

function Meeting() {
  return (
    <div>
      <div className='container-fluid  ' style={{ height: '94vh' }}>
        <div className='row bg-secondary'>
          <div className='col-12'>
            <h5 className='text-white text-center my-2 '>Meeting Room</h5>
          </div>
          <video width='100%' height='200' controls>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        <div className='row bg-dark'>
          <div className='col-12 d-flex flex-row align-content-between'>
            <h2 className='text-white mr-3 ml-3'>
              <MdPeople />{' '}
            </h2>
            <h2 className='text-white mr-3 '>
              <BsMicMuteFill />{' '}
            </h2>
            <h2 className='text-primary mr-3  '>
              <BsChatFill />{' '}
            </h2>
            <h2 className='text-white mr-3'>
              <MdVolumeUp />{' '}
            </h2>
            <h2 className='text-white mr-3'>
              <MdLoop />{' '}
            </h2>
            <h2 className='text-white mr-3'>
              <MdVideocamOff />{' '}
            </h2>
            <h2 className='text-white mr-3 text-danger'>
              <MdCallEnd />{' '}
            </h2>
          </div>
        </div>
        <div className='mt-2 d-flex'>
          <img
            src={cardImg}
            alt=''
            width='50px'
            className='m-2 bg-warning'
            style={{ borderRadius: '50%' }}
          />
          <input
            type='text'
            placeholder='Hey you there!'
            style={{
              margin: '1.5rem',
              borderRadius: '1rem',
            }}
            className='text-center text-white bg-warning'
          />
        </div>
        <div className='mt-2 d-flex'>
          <img
            src={cardImg}
            alt=''
            width='50px'
            className='m-2 bg-warning'
            style={{ borderRadius: '50%' }}
          />
          <input
            type='text'
            placeholder='Cant hear you'
            style={{
              margin: '1.5rem',
              borderRadius: '1rem',
            }}
            className='text-center text-white bg-warning'
          />
        </div>
        <div className='mt-2 d-flex'>
          <input
            type='text'
            placeholder='Hey you there!'
            style={{
              margin: '1.5rem',
              borderRadius: '1rem',
            }}
            className='text-center text-white bg-warning mr-5'
          />
          <img
            src={cardImg}
            alt=''
            width='50px'
            className='m-2 bg-warning'
            style={{ borderRadius: '50%' }}
          />
        </div>
        {/* <hr className='m-0' /> */}
        <div className='mt-2 d-flex'></div>
        <div className='row bg-dark fixed-row-bottom p-3'>
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

export default Meeting;
