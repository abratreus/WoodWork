import React from 'react';
import logo from '../Logo/Logo';
import './CatalogCard.css';

const CatalogCard = ({ title, description, image }) => {
  return (
    <div className="catalog-card">
      <img src={logo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CatalogCard;
