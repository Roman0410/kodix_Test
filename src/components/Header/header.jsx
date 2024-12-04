import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';
import { menu } from './menu';

const Header = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.header_nav}>
          <ul className={styles.header_navList}>
            {menu.map((item, idx) => (
              <li key={`menu-item-${idx}`} className={styles.header_navItem}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.header_logo}>
          <img src={logoImage} alt="" />
        </div>
        <div className={styles.auth_buttons}>
          {isAuthenticated ? (
            <button onClick={handleLogout} className={`${styles.button} ${styles.logOut}`}>
              Log Out
            </button>
          ) : (
            <div className={styles.authLinks}>
              {' '}
              <Link to="/login" className={`${styles.button} ${styles.logIn}`}>
                Log In
              </Link>
              <Link to="/signup" className={`${styles.button} ${styles.signUp}`}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
