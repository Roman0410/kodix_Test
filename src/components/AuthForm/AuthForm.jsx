import React, { useEffect } from 'react';
import styles from './AuthForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const AuthForm = ({ children, formType = 'login' }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className={styles.authForm}>
      <Link to="/" className={styles.bigLogo}>
        <img src="/bigLogo.svg" alt="" className={styles.logo} />
      </Link>

      <div className={styles.formContainer}>
        <div className={styles.formLeft}>
          <h2 className={styles.formTitle}>{formType === 'login' ? 'Sign In' : 'Sign Up'}</h2>
          {children}
        </div>
        <div className={styles.formRight}>
          {formType === 'login' ? (
            <>
              <h3 className={`${styles.formRight_title} ${styles.roboto}`}>
                Kodix <span>PRO</span>
              </h3>
              <p className={styles.shortAdv}>Unlimited traffic, strategic support, and AI-driven upsells</p>
              <a href="#" className={styles.more}>
                Learn More
              </a>
            </>
          ) : (
            <>
              <h3 className={styles.formRight_title}>Get Your FREE 30-Days Trial Now!</h3>
              <ul className={styles.advantagesList}>
                <li>
                  <img src="./coin.svg" alt="" />
                  <div>
                    Absolutely FREE
                    <span>No hidden charges, No credit card required</span>
                  </div>
                </li>
                <li>
                  <img src="./fast.svg" alt="" />
                  <div>
                    Fast & Easy
                    <span>Get access instantly, no downloads required</span>
                  </div>
                </li>
                <li>
                  <img src="./assign.svg" alt="" />
                  <div>
                    Your Own Data
                    <span>Enjoy the Free Trial with your company data</span>
                  </div>
                </li>
                <li>
                  <img src="./stars.svg" alt="" />
                  <div>
                    Unlimited Features
                    <span>Access all features of the world's #1 business software!</span>
                  </div>
                </li>
              </ul>
              <a href="tel:8001301448" className={styles.infoLink}>
                Call us at <span>800 1301 448</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
