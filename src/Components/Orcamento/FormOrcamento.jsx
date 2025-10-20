import React, { useState } from 'react';
import Button from '../Button/Button';
import './FormOrcamento.css';

const FormOrcamento = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form className="form-orcamento" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Enviar Orçamento</Button>
    </form>
  );
};

export default FormOrcamento;
