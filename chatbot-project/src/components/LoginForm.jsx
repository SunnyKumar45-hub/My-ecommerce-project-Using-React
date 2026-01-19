import React from 'react';
import './LoginForm.css';

function LoginForm() {
  const [showPassword, setPassword] = React.useState(false);

  function togglebutton() {
    setPassword(!showPassword);
  }

  return (
    <>
      <div>
        <input placeholder="Email" />
      </div>

      <div>
        <input placeholder="Password" />
      </div>

      <div>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>

      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="enter password"
        />
        <button className="show-btn" onClick={togglebutton}>
          {showPassword ? 'hide' : 'show'}
        </button>
      </div>
    </>
  );
}

export default LoginForm;
