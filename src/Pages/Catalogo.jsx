import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import CatalogGrid from '../components/Catalog/CatalogGrid';
import Footer from '../components/Footer/Footer';

const Catalogo = () => {
  return (
    <div>
      <NavBar />
      <h2>Catálogo de Produtos</h2>
      <CatalogGrid />
      <Footer />
    </div>
  );
};

export default Catalogo;
