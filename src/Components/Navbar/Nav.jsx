import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="annafar-container">
      <div className="logo-container">
        <img src="./images/brands.jpg" alt="Brand Logo" className="brand-logo" />
      </div>
      <div className="links-container">
        <Link to="/" className="link">Home</Link>
        <a href="https://github.com/Abhinavrajsrivastav" className="link">Contact</a>
        <a href="https://www.linkedin.com/in/abhinav-raj-srivastava-599aaa1b2/" className="link">LinkedIn</a>
      </div>
    </div>
  );
}

export default Nav;
