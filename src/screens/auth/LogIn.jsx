import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import LoginForm from '../../components/LogInForm/LogInForm';

const Login = () => {
  return (
    <AuthForm formType="login">
      <LoginForm />
    </AuthForm>
  );
};

export default Login;
