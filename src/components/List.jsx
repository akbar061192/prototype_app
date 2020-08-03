import React from 'react';
import '../styles/StartPage.css';
import { FaVideo } from 'react-icons/fa';
import { BsFillStarFill, BsFillChatSquareFill } from 'react-icons/bs';
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
                className='form-control mt-3'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='search'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <h6 className='mt-3 ml-3 text-primary'>Meeting List:</h6>
          <div className='col-12'>
            <ul class='list-group '>
              <li class='list-group-item'>
                <h3>Max Williams</h3>
                <p>44 participants</p>
                <p>You are not attending</p>
              </li>
              <li class='list-group-item'>
                <h3>Max Williams</h3>
                <p>44 participants</p>
                <p>You are not attending</p>
              </li>
              <li class='list-group-item'>
                <h3>Max Williams</h3>
                <p>44 participants</p>
                <p>You are not attending</p>
              </li>
            </ul>
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

export default List;
