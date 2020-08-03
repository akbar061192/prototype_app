import React from 'react'

export default function ForgetPassword() {
    return (
        <div>
           <div className="container-fluid   bg-dark" style={{'height': '94vh'}}>
              <div className="row ">
                <div className="col-md-12 d-flex" >
                    <h5 className="text-white mr-auto mt-4 ml-2  ">Back</h5>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-8 col-lg-4 col-sm-8 mx-auto d-flex  flex-column  ">
                <h3 className="text-white mt-5">Forgot password?</h3>
                    <p className="text-white my-4">Please enter your email address and we will send your password.
                    by email immediatly
                    </p>
                    <input type="text" className="form-control" placeholder="email"/>
                    <button className="btn btn-secondary btn-block mt-5 rounded-pill p-2 ">Send</button>
                </div>
            </div>
            </div>
        </div>
        
    )
}
