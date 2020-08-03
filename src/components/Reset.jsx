import React from 'react';

function Reset() {
  return (
    <div>
      <div className="container-fluid   bg-dark" style={{ height: '94vh' }}>
        <div className="row ">
          <div className="col-md-12 d-flex">
            <h5 className="text-white mr-auto mt-4 ml-2  ">Back</h5>
          </div>
        </div>
        <div className="row mt-5 text-center">
            <div className="col-12">
                <h2 className="text-white">Hello Sam</h2>
                <p className="text-white">Your password has been reset</p>
            </div>
        </div>
        <button className="btn btn-primary btn-block mt-2 rounded-pill p-2 ">Start Attending Classes</button>

      </div>
    </div>
  );
}

export default Reset;
