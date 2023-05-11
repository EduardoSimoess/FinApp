import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function List() {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desembro'];
  return (
    <div className="bg-rose-400
    h-screen
    text-5xl
    font-mono
    text-white
    font-bold underline
    flex
    flex-col
    gap-y-2.5
    items-center
    text-center
    justify-center
    snap-both
    my-8"
    >
      {months.map((month, i) => (
        <Link to={`/list/${i + 1}`} key={month} className="object-contain">{month}</Link>
      ))}
    </div>
  );
}

export default List;
