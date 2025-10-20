import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import CatalogGrid from '../Components/Catalog/CatalogGrid';
import Footer from '../Components/Footer/Footer';

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
