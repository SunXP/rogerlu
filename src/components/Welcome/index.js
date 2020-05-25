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
            <h3>Hi, my name is Roger Lu and I'm a recent grad from Concordia University in Software Engineering.</h3>
            <p>This website isn't just a portfolio for me, but a way to post about all the new things I learn and experience...</p>
            <p>And not just in tech.</p>
        </div>
        <div className="photo-container">
            <img className="photo" src={photo} />
        </div>
    </div>
   )

 }

export default Welcome