import { Router } from 'express';
import controllers from '../../controllers';
import validateToken from '../../../../middleware/tokenValidationHandler';

const router = Router();

router.use(validateToken);

router.post('/', controllers.expenses.createExpense);

router.get('/', controllers.expenses.getAllExpenses);

router.get('/:expense_id', controllers.expenses.getExpense);

router.delete('/:expense_id', controllers.expenses.deleteExpense);

router.patch('/:expense_id', controllers.expenses.updateExpense);

export default router;
