import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import api from '../services/service';

function Month() {
  const { month } = useParams();
  const [list, setList] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get(`/${month}`).then((response) => {
      const { data } = response.data;
      setList(data);
    });
    console.log(list, 'lista');
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   console.log(list, 'lista2');
  // }, [list]);
  return (
    <div>
      {!list ? (<h1>Carreagando</h1>) : (
        <div>
          {list.map((expense) => (
            <h1>{expense.id}</h1>
          ))}
        </div>
      )}
    </div>
    // <h1>Teste</h1>
  );
}

export default Month;
