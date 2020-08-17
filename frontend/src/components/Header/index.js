import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="/#">Home</a>
            <a href="/#">Posts</a>
            <a href="/#">About Me</a>
        </nav>
        <div className="headerMenu">
            <a href="/#">Github</a>
            <a href="/#">LinkedIn</a>
        </div>
    </header>
   )

 }

export default Header