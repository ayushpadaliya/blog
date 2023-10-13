import React from 'react';
import { useState } from 'react';
import './Home.css';
import img3 from './img3 (2).png';
import { Link } from 'react-router-dom';
import Sign from './Sign';
import Login from './Login'

function Nav() {
 
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLoginModalShow = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false); // Close the sign-up modal if it's open
  };

  const handleSignUpModalShow = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false); // Close the login modal if it's open
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
    setShowSignUpModal(false);
  }
    
  return (
    <div className='bg-warning' id="border" style={{ zIndex: 1000, position: 'fixed', top: 0, left: 0, right: 0}}>
      <nav className="navbar navbar-expand-lg navbar-light  n container ">

        <div className="container" >  
          <a className="navbar-brand" to="#">
            <img src={img3} width="150" height="70" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav justify-content-end" id='a1'>
              <li className="underline nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="underline nav-item">
                <Link className="nav-link" to='/Login' onClick={handleLoginModalShow}>
                  Login</Link>
              </li>
              <li className=" underline nav-item">
                <Link className="nav-link" to="/sign" onClick={handleSignUpModalShow}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Login show={showLoginModal} handleClose={handleModalClose} />
      <Sign show={showSignUpModal} handleClose={handleModalClose} />
    </div> 
  )
}

export default Nav