import React from 'react';
import CatalogCard from './CatalogCard';
import './CatalogGrid.css';

const CatalogGrid = () => {
  const items = [
    { title: 'Mesa de Jantar', description: 'Mesa artesanal de madeira.', image: 'vite.svg' },
    { title: 'Cadeira', description: 'Cadeira confortável.', image: 'vite.svg' },
  ];

  return (
    <div className="catalog-grid">
      {items.map((item, index) => (
        <CatalogCard key={index} {...item} />
      ))}
    </div>
  );
};

export default CatalogGrid;
