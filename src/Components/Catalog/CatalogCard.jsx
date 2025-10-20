import React from 'react';
import viteSvg from '../../assets/react.svg';
import './CatalogCard.css';

const CatalogCard = ({ title, description, image }) => {
  return (
    <div className="catalog-card">
      <img src={viteSvg} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CatalogCard;
