import React from 'react';
import '../styles/StartPage.css';
import { FaFacebook } from 'react-icons/fa';

export default function StartingPage() {
  return (
    <div>
      <div className='container-fluid   bg-dark' style={{ height: '94vh' }}>
        <div className='row '>
          <div className='col-md-12 d-flex'>
            <h5 className='text-white ml-auto pt-4 pr-1 '>SIGN IN ></h5>
          </div>
        </div>
        <div className='row main_content'>
          <div className='col-md-8 mx-auto  '>
            <h3 className='text-white text-center'>
              Ideal partner for your online training
            </h3>
            <hr className='bg-white' />
            <button className='btn btn-block btn-secondary rounded-pill p-2 '>
              SIGN UP WITH EMAIL
            </button>
            <button className='btn btn-primary btn-block  rounded-pill p-2 '>
              <FaFacebook className='h4 mt-1 bg-primary' /> SIGN UP WITH
              FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
