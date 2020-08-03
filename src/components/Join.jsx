import React from 'react';
import '../styles/StartPage.css';
import { FaVideo } from 'react-icons/fa';
import { BsFillStarFill, BsFillChatSquareFill } from 'react-icons/bs';
function Join() {
  return (
    <div>
      <div className="container-fluid  " style={{ height: '94vh' }}>
        <div className="row bg-warning">
          <div className="col-12">
            <h5 className="text-white  m-4 ">Join meeting</h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <form>
              <div className="form-group">
                <label htmlFor="name">Enter Meeting Id:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter meeting Id"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Enter Meeting Password:</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Enter Meeting Password"
                  id="phone"
                />
              </div>

              <button className="btn btn-warning btn-block mt-2 rounded-pill p-2 ">
                Join meeting
              </button>
            </form>
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
    </div>
  );
}

export default Join;
