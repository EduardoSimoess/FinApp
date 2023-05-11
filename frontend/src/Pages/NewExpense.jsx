import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../services/service';

function NewExpense() {
  const [tipo, setTipo] = useState();
  const [categoria, setCategoria] = useState();
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState();
  const [statement, setStatement] = useState(true);
  const [correct, setCorrect] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (tipo && categoria && descricao && correct) {
      setStatement(false);
    } else {
      setStatement(true);
    }
  }, [tipo, categoria, descricao, correct]);

  useEffect(() => {
    if (!valor) {
      setCorrect(false);
    } else {
      const boll = valor.includes(',');
      if (boll) {
        const array = valor.split(',');
        if (array[1].length === 2) {
          setCorrect(true);
        } else {
          setCorrect(false);
        }
      }
    }
  }, [valor]);

  function handleChange(target, set) {
    set(target.value);
  }

  async function handleSubmit() {
    api.post('/', {
      tipo, categoria, valor, descricao,
    }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        setAdded(true);
        alert('despesa adicionada com sucesso');
      }
    }).catch((error) => {
      alert(error.message);
    });
  }
  if (added) return <Redirect to="/" />;
  return (
    <div>
      <form>
        Froma de pagamento:
        <select name="tipo" id="cars" onChange={({ target }) => handleChange(target, setTipo)}>
          <option> </option>
          <option value="Crédito">Crédito</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Débito">Débito</option>
          <option value="Pix">Pix</option>
        </select>

        Categoria do gasto:
        <select name="tipo" id="cars" onChange={({ target }) => handleChange(target, setCategoria)}>
          <option> </option>
          <option value="Alimetação">Alimetação</option>
          <option value="Diversos">Diversos</option>
          <option value="Domésticas">Domésticas</option>
          <option value="Lazer">Lazer</option>
          <option value="Saúde">Saúde</option>
        </select>
      </form>

      <label htmlFor="favorite">
        Valor (com duas casas após a vírgula):
        <input
          type="text"
          value={valor}
          onChange={({ target }) => handleChange(target, setValor)}
        />
      </label>

      <label htmlFor="favorite">
        Descrição do gasto:
        <input
          type="text"
          value={descricao}
          onChange={({ target }) => handleChange(target, setDescricao)}
        />
      </label>

      <button
        type="submit"
        disabled={statement}
        onClick={handleSubmit}
      >
        Adicionar Gasto

      </button>
    </div>
  );
}

export default NewExpense;
