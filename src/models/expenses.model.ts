import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IExpense } from '../interfaces/IExpense';
import { IReturnExp } from '../interfaces/IReturnExp';
// RowDataPacket,

export default class ExpenseModel {
  public connection = mysql;

  public async create(expense: IExpense): Promise<number> {
    const { valorCent, dataDeCompra, descricao, tipoPagamentoId, categoriaId } = expense;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO ExpensesController.despesas 
      (valor_cent, data_da_compra, descricao,
        tipo_pagamento_id, categoria_id) VALUES (?, ?, ?, ?, ?)`,
      [valorCent, dataDeCompra, descricao, tipoPagamentoId, categoriaId],
    );

    return insertId;
  }

  public async getExpenses(month: number): Promise<IReturnExp[]> {
    const [list] = await this.connection.execute<(
    RowDataPacket[] & IReturnExp[])>(
      `SELECT d.id, d.valor_cent AS valorCent, d.data_da_compra AS data, d.descricao, 
      c.nome AS categoria, p.tipo
      FROM ExpensesController.despesas AS d
      INNER JOIN ExpensesController.categorias AS c
      ON d.categoria_id = c.id
      INNER JOIN ExpensesController.pagamento AS p
      ON d.tipo_pagamento_id = p.id
      WHERE MONTH(data_da_compra)=?`,
      [month],
      );

    console.log(list);

    return list;
  }
}