import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { validate as uuidValidate } from 'uuid';
import expenses from '../../../../models/expense';

const createExpense = expressAsyncHandler(async (req: any, res: any) => {
  const { body, query } = req;
  const groupId = query.group_id as string;
  if (!uuidValidate(groupId)) {
    res
      .status(400)
      .json({ error: 'VALIDATION_ERROR', message: 'invalid groupId' });
    return;
  }

  const allowedKeys: Array<string> = [
    'description',
    'amount',
    'currency',
    'payer',
  ];
  allowedKeys.forEach((item: any) => {
    if (Object.keys(body).indexOf(item) === -1) {
      res.status(400).json({
        error: 'VALIDATION_ERROR',
        message: `invalid-request-body, ---${item}--- is required`,
      });
      return;
    }
  });

  const expenseToSet = { ...body, groupId, adderId: req.user.uuid };
  const addedExpense = await expenses.create(expenseToSet);
  res.status(201).json({ addedExpense });
  return;
});

const getAllExpenses = expressAsyncHandler(async (req: any, res: any) => {
  const allExpenses = await expenses.find();
  res.status(200).json({ data: allExpenses, count: allExpenses.length });
});

const getExpense = expressAsyncHandler(async (req: Request, res: Response) => {
  const { params } = req;
  const expense = await expenses.findOne({ uuid: params.expense_id });
  res.status(200).json(expense);
});

const deleteExpense = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ data: 'Delete Expense' });
  }
);

const updateExpense = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ data: 'Update Expense' });
  }
);

export default {
  createExpense,
  getExpense,
  getAllExpenses,
  deleteExpense,
  updateExpense,
};
