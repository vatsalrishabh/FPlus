// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
    setShowForgotPasswordForm(false);
  };

  const handleShowRegistrationForm = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(true);
    setShowForgotPasswordForm(false);
  };

  const handleShowForgotPasswordForm = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
    setShowForgotPasswordForm(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Login</h5>
              {showLoginForm && (
                <form>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label d-block text-center">Mobile Number</label>
                    <input type="number" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label d-block text-center">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                  <p className="mt-3 text-center">
                    <a href="#" onClick={handleShowRegistrationForm}>Register</a> | <a href="#" onClick={handleShowForgotPasswordForm}>Forgot Password</a>
                  </p>
                </form>
              )}
              {showRegistrationForm && (
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dp" className="form-label">DP</label>
                    <input type="file" className="form-control" id="dp" accept="image/*" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">DOB</label>
                    <input type="date" className="form-control" id="dob" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="sex" className="form-label">Sex</label>
                    <select className="form-control" id="sex">
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
                  <p className="mt-3 text-center">
                    <a href="#" onClick={handleShowLoginForm}>Back to Login</a>
                  </p>
                </form>
              )}
              {showForgotPasswordForm && (
                <form>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  <p className="mt-3 text-center">
                    <a href="#" onClick={handleShowLoginForm}>Back to Login</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
