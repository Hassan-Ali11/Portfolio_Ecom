import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', {
        email,
        password
      });
      alert('Login successful!');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert(err.response.data.msg || 'Login failed');
    }
  };

  return (
    <div className="form-container">
      <h2>G&B Solutionz</h2>
      <h3>Login Account</h3>
      <p>Don't have an account? <Link to="/signup">Create An Account</Link></p>
      
      <div className="form-group">
        <input type="email" placeholder="Enter Your Email Id" onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} required />
      </div>
      
      <div className="form-group">
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;