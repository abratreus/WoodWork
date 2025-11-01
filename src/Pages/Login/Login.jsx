import React, { useState } from 'react';
import Button from '../../Components/Button/Button.jsx';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

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
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} className="d-none d-md-block">
          <div className="login-image">
            <img src="/src/assets/pexels-jeshoots-com-147458-834892.jpg" alt="Login" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
          <form className="login-form shadow p-4 mb-5 bg-body-tertiary rounded" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Entrar</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={credentials.password}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <Button type="submit" className="w-100">Entrar</Button>
            <Link to="/" className="btn btn-secondary mb-3 align-self-start">
              <i className="bi bi-arrow-left-circle"></i> Voltar
            </Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
