import React, { useState } from 'react';
import './login.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className="logo">
        <img src="velevetvista.png" alt="Website Logo" />
      </div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? null : (
            <>
              <div className='input'>
                <input placeholder="Name" type="text" required/>
              </div>
              <div className='input'>
                <input placeholder="Mobile.no" type="text" required/>
              </div>
            </>
          )}

          <div className='input'>
            <input placeholder="Email Id" type="email" required/>
          </div>

          <div className='input'>
            <input placeholder="Password" type="password" required/>
          </div>
        </div>
        <div className='inputs'>
          {action === "Login" ? null : (
            <>
              <div className='input'>
                <input placeholder="Confirm password" type="password" required/>
              </div>
            </>
          )}

          {action === "Sign Up" ? (
            <label>
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              <b>I agree to the terms and conditions</b>
            </label>
          ) : (
            <div className="forgot-password">Forget Password? <span>Click Here!</span></div>
          )}

          <div className="submit-container">
            <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</button>
            <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
