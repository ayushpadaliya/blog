import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Nav } from 'react-bootstrap';



const Login = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

  const handleCancel = () => {
    handleClose(); // Close the modal
    // Navigate to the appropriate page based on the login status
    if (loggedIn) {
      history('/'); // Navigate to the home page if logged in
    } else {
      alert("please register !")
      history('/'); // Navigate to the registration page if login didn't work
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      if (response.status === 200) {
        console.log('login successful')
        setLoggedIn(true);
        history('/Loadingpage');
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)

      }
      else {
        console.log('an error occured')
      }
    }
    
    // Add your login logic here (e.g., API request)
    
  };


  return (

    <Modal show={show} onHide={handleCancel}>
      <Modal.Header closeButton >
        <Modal.Title className='modalheader'>WELCOME</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </Modal.Body>
    </Modal>

  );
};

export default Login;
