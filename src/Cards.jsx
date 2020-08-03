import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
  return (
    <>
      <div className='col-md-4 col-10  mb-5'>
        <div className='card' style={{ width: '400px' }}>
          <img
            className='card-img-top'
            src={props.img}
            alt='Card image'
            style={{ width: '100%', height: '200px' }}
          />
          <div className='card-body'>
            <h4 className='card-title font-weight-bold'>{props.title}</h4>
            <p className='card-text'>
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <NavLink to='/contact' className='btn btn-primary'>
              See Profile
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
