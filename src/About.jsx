import React from 'react';
import Common from './Common';
import web from './images/image1.webp';

const About = () =>{
    return (
        <>
        <Common title="Welcome to About Page" name="Aslam Khan" img ={web} btnName="Contact Now" visit="/contact" />
        </>

    )
}

export default About