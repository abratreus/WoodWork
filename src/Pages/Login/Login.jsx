import React, { useState } from 'react';
import Button from '../../Components/Button/Button.jsx';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', credentials);
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
