import { IExpenseData } from '../interfaces/IExpenseData';
import { IReturnExp } from '../interfaces/IReturnExp';
import CategoriesModel from '../models/categories.model';
import ExpenseModel from '../models/expenses.model';
import PaymentModel from '../models/payment.model';

export default class ExpenseService {
  public paymentModel = new PaymentModel();

  public categorieModel = new CategoriesModel();

  public expensesModel = new ExpenseModel();

  public async newExpense(expenseData: IExpenseData): Promise<number> {
    const { tipo, categoria, valor, descricao } = expenseData;
    const tipoPagamentoId = await this.paymentModel.getPaymentId(tipo);
    const categoriaId = await this.categorieModel.getCategorieId(categoria);
    const fixedValue = valor.replace(',', '.');
    const valorCent = 100 * Number(fixedValue);
    const obj = { valorCent, dataDeCompra: new Date(), descricao, tipoPagamentoId, categoriaId };
    const id = this.expensesModel.create(obj);
    return id;
  }

  public async listExpenses(month: number): Promise<IReturnExp[]> {
    // const month = (new Date().getMonth()) + 1;
    const list = await this.expensesModel.getExpenses(month);
    return list;
  }
}