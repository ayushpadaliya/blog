import React from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/Home.css';
import img3 from '../Homepage/img3 (2).png';

function Header() {
  return (
    <div className='bg-warning' id="border" style={{ zIndex: 1000, position: 'fixed', top: 0, left: 0, right: 0}}>
      <nav className="navbar navbar-expand-lg navbar-light n container" >
        <div className="container">
          <a className="navbar-brand" to="#">
            <img src={img3} width="150" height="70" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav justify-content-end" id='a1'>
              <li className="underline nav-item">
                <Link className="nav-link" to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
