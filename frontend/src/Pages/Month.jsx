import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/service';
import '../App.css';

function Month() {
  const { month } = useParams();
  const [list, setList] = useState();

  useEffect(() => {
    api.get(`/${month}`).then((response) => {
      const { data } = response.data;
      setList(data);
    });
  }, []);

  function fixDate(date) {
    const partOne = date.split('T');
    const correct = partOne[0].split('-').reverse().join('/');
    return correct;
  }

  return (
    <div>
      {!list ? (<h1>Carreagando</h1>) : (
        <div>
          {list.length === 0 ? <p>Não há gastos</p> : (
            <div>
              {list.map((expense) => (
                <div key={expense.id} className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Compra:
                    {' '}
                    {expense.descricao}
                  </p>
                  <p className="text-sm text-gray-500">
                    Valor: R$
                    {expense.valorCent / 100}
                  </p>
                  <p>
                    Categoria:
                    {' '}
                    {expense.categoria}
                  </p>
                  <p>
                    Forma de pagamento:
                    {' '}
                    {expense.tipo}
                  </p>
                  <p>
                    Data:
                    {fixDate(expense.data)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Link to="/">Pagina Inicial</Link>
    </div>
    // <h1>Teste</h1>
  );
}

export default Month;
