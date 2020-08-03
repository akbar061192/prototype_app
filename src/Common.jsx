import React from 'react';
import web from './images/image1.webp';
import {NavLink} from  'react-router-dom'
const Common = (props) =>{
    console.log(props);
    
    return (
        <>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row section ">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.title}<br></br><strong className="logo"> {props.name}</strong> </h1>
                            <h2 className="my-3">
                                We are the talented developers of making website
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btnName}</NavLink>
                            </div>
                        </div> 

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.img} alt="img" className="img-fluid animated" style={{height:'450px'}} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}

export default Common