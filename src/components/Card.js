import React from 'react';
import '../styles/StartPage.css';
import { FaVideo } from 'react-icons/fa';
import {BsFillStarFill, BsFillChatSquareFill } from "react-icons/bs";
function Card() {
  return (
    <div>
      <div className="container-fluid " style={{ height: '94vh' }}>
        <div className="row mb-5 ">
          <div className="col-md-12 ">
            <h5 className="text-dark text-center mt-5  mb-4 ml-2  ">
              Hi, Rohit Kumar
            </h5>
          </div>
        </div>
        <div className="row mt-5  d-flex justify-content-center align-content-center">
          <div
            className="card col-5 bg-dark m-1"
            style={{ height: '100px', width: '200px' }}
          >   <h5 className="text-white">
            <BsFillStarFill />
          </h5>
            <p className="text-white text-center ">Insta Meeting</p>
            <button className="btn btn-sm btn-warning  rounded-pill p-0 ">
              Create
            </button>
          </div>
          <div
            className="card col-5 bg-dark m-1"
            style={{ height: '100px', width: '200px' }}
          >
           <h5 className="text-white">
            <BsFillStarFill />
          </h5>
            <p className="text-white text-center ">Join Meeting</p>
            <button className="btn btn-sm btn-warning  rounded-pill p-0 ">
              Now
            </button>
          </div>
          <div
            className="card col-5 bg-dark m-1"
            style={{ height: '100px', width: '200px' }}
          >
           <h5 className="text-white">
            <BsFillStarFill />
          </h5>
            <p className="text-white text-center ">Schedule</p>
            <button className="btn btn-sm btn-primary  rounded-pill p-0 ">
              Create
            </button>
          </div>
          <div
            className="card col-5 bg-dark m-1"
            style={{ height: '100px', width: '200px' }}
          >
           <h5 className="text-white">
            <BsFillStarFill />
          </h5>
            <p className="text-white text-center">MyMeeting</p>
            <button className="btn btn-sm btn-primary  rounded-pill p-0 ">
              Check
            </button>
          </div>
          <div
            className="card col-5 bg-dark m-1"
            style={{ height: '100px', width: '200px' }}
          >
           <h5 className="text-white">
            <BsFillStarFill />
          </h5>
            <p className="text-white text-center ">My Contacts</p>
            <button className="btn btn-sm btn-primary  rounded-pill p-0 ">
              Create
            </button>
          </div>
          <div
            className="card col-5 bg-dark m-1"
            style={{ height: '100px', width: '200px' }}
          >
           <h5 className="text-white">
            <BsFillStarFill />
          </h5>
            <p className="text-white text-center ">Account Setting</p>
            <button className="btn btn-sm btn-primary  rounded-pill p-0 ">
              Fix
            </button>
          </div>
        </div>
      </div>
      <div className="row bg-dark fixed-row-bottom  p-3">
        <div className="col-4 d-flex flex-column ">
        <h5>
            <BsFillChatSquareFill />
          </h5>
          <h6>Discover</h6>
        </div>
        <div className="col-4 d-flex flex-column bdr">
        <h2>
            <FaVideo />
          </h2>
          <h6>Create Meeting</h6>
        </div>
        <div className="col-4 d-flex flex-column">
        <h5>
            <BsFillStarFill />
          </h5>
          <h6>LinedUp Meetings</h6>
        </div>
          
        </div>
    </div>
  );
}

export default Card;
