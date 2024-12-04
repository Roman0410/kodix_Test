import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../AuthForm/AuthForm.module.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      alert('Login successful!');
      window.location.href = '/';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <a href="/forgot-password" className={styles.forgotPassword}>
          Forgot password?
        </a>
        <button type="submit" className={styles.submitButton}>
          Sign In
          <img src="/arrow.svg" alt="" />
        </button>
      </form>
      <Link to="/signup" className={styles.switchTo}>
        Don’t have an account? <span>Sign Up</span>
      </Link>
    </div>
  );
};

export default LoginForm;
