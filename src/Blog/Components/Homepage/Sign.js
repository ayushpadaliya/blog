import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sign = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const navigate = useNavigate();

  const handleCancel = () => {
    handleClose();
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const newUser = { name, email, password };

    try {
      const response = await axios.post(
        'http://localhost:5001/sign',
        newUser,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setName('');
        setEmail('');
        setPassword('');
        setAlertMessage('Registration successful. You can now log in.');
        setTimeout(() => {
          setAlertMessage(null);
          handleClose();
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      setError('');
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title className="modalheader">WELCOME</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            {alertMessage && (
              <div className="alert alert-success">{alertMessage}</div>
            )}
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Sign;
