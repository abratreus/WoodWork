import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Button from '../Components/Button/Button';
import Footer from '../Components/Footer/Footer';
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
      <NavBar />
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
      <Footer />
    </div>
  );
};

export default Login;
