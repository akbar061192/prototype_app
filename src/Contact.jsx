import React, { useState } from 'react';

const Contact = () => {
    const [state, setState] = useState({
        name :'',
        phone : '',
        email : ''
    })
    
    const inputEvent = (event) =>{
         
        const {name, value} = event.target;

        setState( (prvsData) =>{
            return {
                ...prvsData,
                [name] : value
            }
        })

    }
    const formSubmit =(e) =>{

        if(state.name !=="" && state.phone !=="" && state.email !=="" ){
            alert(` 
            Name : ${state.name}
            Phone : ${state.phone} 
            email : ${state.email}`)
        }else{
            alert('Please fill the form')
        }
        
        e.preventDefault()

    }
    return (
        <>
        <div className="my-5">
            <h1 className="text-center " >Contact Us</h1>
        </div>

        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input  name="name" value={state.name} onChange={inputEvent} type="text" className="form-control" placeholder="Enter name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input name="phone" value={state.phone} onChange={inputEvent} type="text" className="form-control" placeholder="Enter mobile number" id="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input name="email" value={state.email} onChange={inputEvent} type="email" className="form-control" placeholder="Enter email" id="email" />
                </div>  
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
        </>

    )
}

export default Contact;