import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-header">Login</h2>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="login-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="login-input"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="login-footer">
          <a href="/forgot-password" className="login-forgot">Forget Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
