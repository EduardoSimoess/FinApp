import { Link } from 'react-router-dom';
import React from 'react';

function Intial() {
  return (
    <div>
      <Link to="/new">Adicionar Gasto</Link>
      <Link to="/list">Lista de despesas</Link>
    </div>
  );
}

export default Intial;
