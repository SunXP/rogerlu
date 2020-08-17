import React from 'react';
import './style.css';
import photo from '../../images/welcome-img.jpg';

/**
* @author
* @function Welcome
**/

const Welcome = (props) => {
  return(
    <div className="welcome-container">
        <div className="welcome-text">
            <h2>Hi, my name is Roger Lu and I'm a software developer</h2>
            <p>Even so, this website isn't just a portfolio, but a way for me to post about all the new things I learn and experience,</p>
            <p>and not just in tech.</p>
        </div>
        <div className="photo-container">
            <img className="photo" src={photo} />
        </div>
    </div>
   )

 }

export default Welcome