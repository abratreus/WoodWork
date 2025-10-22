import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import LogoText from "../Logo/LogoText";

export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className="shadow p-3 mb-5 bg-white rounded Navbar">
      <Container>
        <LinkContainer to="/"  expand="md">
          <Navbar.Brand>
            <Row className="align-items-center m-0 p-0 auto g-0 mb-0 p-0">
            <Col><Logo /></Col>
            <Col className="d-none d-md-block"><LogoText /></Col>
            </Row>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/catalogo">
              <Nav.Link>Catálogo</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Conta" id="nav-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Entrar</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/cadastro">
                <NavDropdown.Item>Cadastrar</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
/* 
Links
  <li><Link to="/">Home</Link></li>
  <li><Link to="/catalogo">Catálogo</Link></li>
  <li><Link to="/sobre">Sobre</Link></li>
  <li><Link to="/login">Login</Link></li>

nav antiga

import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import LogoText from "../Logo/LogoText";
import '../../assets/theme.css';


export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className="shadow-sm Navbar">
      <Container>
        <LinkContainer to="/"  expand="md">
          <Navbar.Brand>
            <Row className="align-items-center m-0 p-0 auto g-0 mb-0 p-0">
            <Col><Logo /></Col>
            <Col className="d-none d-md-block"><LogoText /></Col>
            </Row>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/catalogo">
              <Nav.Link>Catálogo</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Conta" id="nav-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Entrar</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/cadastro">
                <NavDropdown.Item>Cadastrar</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

*/