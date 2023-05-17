import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { ICategorie } from '../interfaces/ICategorie';

export default class CategoriesModel {
  public connection = mysql;

  public async getCategorieId(categorieName: string): Promise<number> {
    const [[{ id }]] = await this.connection.execute<(
    RowDataPacket[] & ICategorie[])>(
      'SELECT id FROM ExpensesController.categorias WHERE nome=?',
      [categorieName],
      );
  
    return id;
  }
}
