import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer.jsx';

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <h2>404 - Página Não Encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <Footer />
    </div>
  );
};

export default NotFound;
