import { Request, Response } from 'express';
import ExpenseService from '../services/expenses.service';

export default class ExpenseController {
  public expenseService = new ExpenseService();

  public async newExpense(req: Request, res: Response) {
    const { tipo, categoria, valor, descricao } = req.body;
    const id = await this.expenseService.newExpense({ tipo, categoria, valor, descricao });
    return res.status(201).json({ data: id, succes: true });
  }

  public async listExpenses(req: Request, res: Response) {
    const { month } = req.params;
    const list = await this.expenseService.listExpenses(Number(month));
    return res.status(200).json({ data: list, succes: true });
  }
}