import { Router } from 'express';
import ExpenseController from '../controllers/expenses.controller';
import descriptionNCategorie from '../midllewares/description.midlleware';
import typeValidation from '../midllewares/type.midlleware';
import midlleware from '../midllewares/value.midlleware';

const router = Router();

const expenseController = new ExpenseController();

router.post(
  '/', 
  descriptionNCategorie,
  typeValidation,
  midlleware.valueValidation,
  midlleware.signalValidation,
  expenseController.newExpense.bind(expenseController),
);

router.get('/:month', expenseController.listExpenses.bind(expenseController));

export default router;