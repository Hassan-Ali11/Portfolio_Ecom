import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS-files/SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('PK +92');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
        countryCode,
        phoneNumber,
        password,
      });
      setMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage('Something went wrong.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>G&B Solutionz</h2>
      <h3>Create an Account</h3>
      <p>Already have an account? <Link to="/signin">Login</Link></p>

      {message && <p style={{ color: 'red' }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="email" placeholder="Enter Your Email Id" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="text" value={countryCode} onChange={e => setCountryCode(e.target.value)} required />
          <input type="text" placeholder="Enter Your Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Enter Your Password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>

        <div className="form-group">
          <button type="submit">Get Started</button>
        </div>
      </form>

      <div className="terms">
        <p>By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
      </div>

      <div className="form-links">
        <button>Continue with Google</button>
      </div>
    </div>
  );
}

export default SignUp;