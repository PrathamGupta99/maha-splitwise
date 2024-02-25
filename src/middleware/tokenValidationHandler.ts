import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const validateToken = expressAsyncHandler(async (req: any, res: any, next) => {
  const { headers } = req;
  const authHeader = (headers.authorization || headers.Authorization) as string;
  if (!authHeader) {
    res.status(401).json({ message: 'Token is not provided' });
    return;
  }
  const token = authHeader?.split(' ')[1];
  jwt.verify(
    token,
    process.env.JWT_SECRET_KEY as string,
    (err: any, decode: any) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Token' });
        return;
      }
      req.user = decode.user;
      next();
    }
  );
});
export default validateToken;
