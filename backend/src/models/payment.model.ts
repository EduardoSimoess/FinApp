import { RowDataPacket } from 'mysql2';
import { IPayment } from '../interfaces/IPayment';
import mysql from './connection';

export default class PaymentModel {
  public connection = mysql;
  
  public async getPaymentId(paymentType: string): Promise<number> {
    const [[{ id }]] = await this.connection.execute<(
    RowDataPacket[] & IPayment[])>(
      'SELECT id FROM ExpensesController.pagamento WHERE tipo=?',
      [paymentType],
      );
    console.log(id);
    
    return id;
  }
}