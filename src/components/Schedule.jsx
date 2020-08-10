import React from 'react';
import '../styles/StartPage.css';
import { FaVideo, FaFilm } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
function Schedule() {
  return (
    <div>
      <div className='container-fluid  bg-white' style={{ height: '94vh' }}>
        <div className='row bg-primary'>
          <div className='col-md-12 d-flex flex-column'>
            <h5 className='text-white mr-auto mt-4 ml-2'>Schedule Meeting</h5>
            <div className='form-group'>
              <input
                type='text'
                className='form-control mt-3 text-center mx-auto'
                id='exampleInputEmail18'
                aria-describedby='emailHelp'
                placeholder={`Search`}
                style={{ borderRadius: '25px' }}
              />
            </div>
          </div>
        </div>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control mt-3'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Meeting Title'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword12'
              placeholder='Date and Time'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword13'
              placeholder='Meeting duration'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword14'
              placeholder='Time Zone'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword15'
              placeholder='Repeatation'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword16'
              placeholder='Meeting password'
            />
          </div>
          <div className='form-group mb-3'>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword17'
              placeholder='Password'
            />
          </div>

          <button className='btn btn-primary btn-block mt-2 rounded-pill p-2 '>
            Schedule meeting
          </button>
        </form>
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
    </div>
  );
}

export default Schedule;
