import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function List() {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desenbro'];
  return (
    <div>
      {months.map((month, i) => (
        <Link to={`/list/${i + 1}`}>{month}</Link>
      ))}
    </div>
  );
}

export default List;
