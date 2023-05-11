import { Link } from 'react-router-dom';
import React from 'react';

function Intial() {
  return (
    <div className="bg-rose-400
    h-screen
    text-5xl
    font-mono
    text-white
    font-bold underline
    flex
    flex-col
    gap-y-11
    items-center
    text-center
    justify-center"
    >
      <Link to="/new">Adicionar despesa</Link>
      <Link to="/list">Lista de despesas</Link>
    </div>
  );
}

export default Intial;
