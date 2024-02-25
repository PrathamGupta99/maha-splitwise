import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import users from '../../../../models/users';

const getAllUsers = expressAsyncHandler(async (req: Request, res: Response) => {
  const allUsers = await users.find();
  res.status(200).json({ data: allUsers, count: allUsers.length });
});

const getUser = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ data: 'Get User' });
});

const deleteUser = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ data: 'Delete User' });
});

const updateUser = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ data: 'Update User' });
});

export default {
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
