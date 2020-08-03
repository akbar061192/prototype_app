import React from 'react';
import '../styles/StartPage.css';
import { FaVideo } from 'react-icons/fa';
import {BsFillStarFill, BsFillChatSquareFill } from "react-icons/bs";
function Schedule() {
  return (
    <div>
      <div className="container-fluid  " style={{ height: '94vh' }}>
        <div className="row bg-primary">
          <div className="col-md-12 d-flex flex-column">
            <h5 className="text-white mr-auto mt-4 ml-2  ">Schedule Meeting</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="search"
              />
            </div>
          </div>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="meeting title"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Date and Time"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Meeting duration :"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Time Zone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Repeatation"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Meeting password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button className="btn btn-primary btn-block mt-2 rounded-pill p-2 ">
            Schedule meeting
          </button>
        </form>
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
    </div>
  );
}

export default Schedule;
