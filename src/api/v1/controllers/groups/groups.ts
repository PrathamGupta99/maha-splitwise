import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import expenses from '../../../../models/expense';

const createGroup = expressAsyncHandler(async (req: any, res: any) => {
  res.status(201).json({ data: 'Group Added Successfully' });
  return;
});

const getAllGroups = expressAsyncHandler(async (req: any, res: any) => {
  const allExpenses = await expenses.find();
  res.status(200).json({ data: allExpenses, count: allExpenses.length });
});

const getGroup = expressAsyncHandler(async (req: Request, res: Response) => {
  const { params } = req;
  const expense = await expenses.findOne({ uuid: params.expense_id });
  res.status(200).json(expense);
});

const deleteGroup = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ data: 'Delete Expense' });
});

const updateGroup = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ data: 'Update Expense' });
});

export default {
  createGroup,
  getGroup,
  getAllGroups,
  deleteGroup,
  updateGroup,
};
