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
                <img src='' alt="" />
                <input placeholder="Name" type="text" />
              </div>
              <div className='input'>
                <img src='' alt="" />
                <input placeholder="Confirm Password" type="text" />
              </div>
              <div className='input'>
                <img src='' alt="" />
                <input placeholder="Mobile.no" type="text" />
              </div>
            </>
          )}

          <div className='input'>
            <img src='' alt="" />
            <input placeholder="Email Id" type="email" />
          </div>

          <div className='input'>
            <img src='' alt="" />
            <input placeholder="Password" type="password" />
          </div>
        </div>

        {action === "Sign Up" ? (
          <label>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <b>I agree to the terms and conditions</b>
          </label>
        ) : (
          <div className="forgot-password">Forget Password? <span>Click Here!</span></div>
        )}

        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
