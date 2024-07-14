import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  // Define state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Method to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Method to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Method to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
    }

    // If no errors, proceed with form submission
    if (!emailError && !passwordError) {
      // Add form submission logic here (e.g., API call)
      console.log('Form submitted', { email, password });
    }
  };

  return (
    <main>
      <form style={{position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'}} className="form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <i className="fa-solid fa-at"></i>
          <input
            type="text"
            className="input"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {emailError && <div className="error">{emailError}</div>}

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <i className="fa-solid fa-lock"></i>
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="input"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
        {passwordError && <div className="error">{passwordError}</div>}

        <div className="flex-row">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
            <span className="span">Forgot password?</span>
          </Link>
        </div>
        <button type="submit" className="button-submit">Sign In</button>
        <p className="p">
          Don't have an account?
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <span className="span">Sign Up</span>
          </Link>
        </p>
        <div className="separator">
          <hr className="line" />
          <span className="ms-5">Or</span>
          <hr className="line" />
        </div>
        <div className="flex-row">
          <button className="btn google">
            <svg
              version="1.1"
              width="20"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
            >
              <path
                style={{ fill: '#FBBB00' }}
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"
              ></path>
              <path
                style={{ fill: '#518EF8' }}
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
              ></path>
              <path
                style={{ fill: '#28B446' }}
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
              ></path>
              <path
                style={{ fill: '#F14336' }}
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"
              ></path>
            </svg>
            Google
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;