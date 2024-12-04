import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <AuthForm formType="register">
      <RegisterForm />
    </AuthForm>
  );
};

export default Register;
