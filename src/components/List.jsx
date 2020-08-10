import React from 'react';
import '../styles/StartPage.css';
import { FaVideo, FaFilm } from 'react-icons/fa';
import { BsFillStarFill, BsFillPlusCircleFill, BsCheck } from 'react-icons/bs';
import cardImg from './card.jpeg';

function List() {
  return (
    <div>
      <div className='container-fluid  ' style={{ height: '94vh' }}>
        <div className='row bg-primary'>
          <div className='col-md-12 d-flex flex-column'>
            <h5 className='text-white mr-auto mt-4 ml-2  '>My Meetings</h5>
            <div className='form-group'>
              <input
                type='text'
                className='form-control mt-3 text-center'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Search'
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <h6 className='mt-3 ml-3 text-warning'>Meeting List:</h6>
          <div className='col-12'>
            <ul className='list-group '>
              <li className='list-group-item d-flex align-align-items-center justify-content-around'>
                <div className='mt-4'>
                  <h5>1</h5>
                </div>
                <div>
                  <img
                    src={cardImg}
                    alt=''
                    width='50px'
                    className='m-2 bg-warning'
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <h5 className='my-0'>Max Williams</h5>
                  <p className='my-0 text-secondary'>44 participants</p>
                  <p className='text-secondary' style={{ fontSize: '11px' }}>
                    You are not attending
                  </p>
                </div>
                <div>
                  <p>12:30pm</p>
                  <BsFillPlusCircleFill className='mb-5 ml-3 text-primary bg-white h4' />
                </div>
              </li>
              <li className='list-group-item d-flex align-align-items-center justify-content-around'>
                <div className='mt-4'>
                  <h5>2</h5>
                </div>
                <div>
                  <img
                    src={cardImg}
                    alt=''
                    width='50px'
                    className='m-2 bg-warning'
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <h5 className='my-0'>Max Williams</h5>
                  <p className='my-0 text-secondary'>44 participants</p>
                  <p className='text-secondary' style={{ fontSize: '11px' }}>
                    You are not attending
                  </p>
                </div>
                <div>
                  <p>12:30pm</p>
                  <BsCheck className='mb-5 ml-3 bg-primary h5 text-white' />
                </div>
              </li>
            </ul>
          </div>
        </div>
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

export default List;
