import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from '../AuthForm/AuthForm.module.scss';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, firstName, lastName, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful! You can now log in.');
    window.location.href = '/login';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" placeholder="Your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" placeholder="Your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
          <img src="/arrow.svg" alt="" />
        </button>
      </form>
      <Link to="/login" className={styles.switchTo}>
        Already have an account? <span>Sign In</span>
      </Link>
    </div>
  );
};

export default RegisterForm;
