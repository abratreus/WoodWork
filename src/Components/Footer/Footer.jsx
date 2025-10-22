import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer py-5 mt-5 shadow-lg p-3 bg-white rounded">
      <Container fluid className="px-5">
        <Row>
          <Col md={4} className="mb-4">
            <h5>WoodWork</h5>
            <p>Seu Site de Simulação Orçamentos. Qualidade e estilo para seu lar.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark">Home</Link></li>
              <li><Link to="/catalogo" className="text-dark">Catálogo</Link></li>
              <li><Link to="/sobre" className="text-dark">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-dark">Contato</Link></li>
              <li><Link to="/politica-privacidade" className="text-dark">Política de Privacidade</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contato</h5>
            <p>Telefone: (12) 99117-7237</p>
            <p>Email: contato@woodwork.com</p>
            <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} WoodWork. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

