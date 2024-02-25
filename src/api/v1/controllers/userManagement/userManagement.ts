import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../../../../models/users';
import 'dotenv/config';

const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { body } = req;
  const { email, password } = body;
  if (!email) {
    res
      .status(400)
      .json({ error: 'VALIDATION_ERROR', message: 'email is required' });
    return;
  }
  if (!password) {
    res
      .status(400)
      .json({ error: 'VALIDATION_ERROR', message: 'password is required' });
    return;
  }
  const user = await Users.findOne({ email: body.email });

  if (!user) {
    res.status(404).json({
      error: 'USER_NOT_FOUND',
      message: "user with the given credentials doesn't exists",
    });
    return;
  }
  if ((await bcrypt.compare(password, user.password as string)) === false) {
    res.status(401).json({
      error: 'USER_NOT_FOUND',
      message: 'no user found with given credential',
    });
    return;
  }

  const accessToken = jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        uuid: user.uuid,
      },
    },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: 1 * 60 * 60 * 1000 }
  );
  res.status(200).json({ message: 'Login successful', accessToken });
});

const registerUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { body } = req;

    const allowedKeys: Array<string> = [
      'username',
      'email',
      'password',
      'firstName',
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

    const emailAvailable = await Users.findOne({ email: body.email });
    if (emailAvailable) {
      res.status(400).json({
        error: 'VALIDATION_ERROR',
        message: `User with email = ${body.email} already exists`,
      });
      return;
    }

    const usernameAvailable = await Users.findOne({ username: body.username });
    if (usernameAvailable) {
      res.status(400).json({
        error: 'VALIDATION_ERROR',
        message: `User with username = ${body.username} already exists`,
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const userToSet = { ...body };
    userToSet.password = hashedPassword;
    const addedUser = await Users.create(userToSet);
    res.status(201).json({
      message: 'User Registered Successfully',
      data: {
        email: addedUser.email,
        username: addedUser.username,
      },
    });
    return;
  }
);

export default {
  loginUser,
  registerUser,
};
