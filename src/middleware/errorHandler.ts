import { errorConstants } from '../constants/constants';

export const errorHandler = (err: any, req: any, res: any, next: any) => {
  console.error(err); // Log the error for debugging purposes

  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case errorConstants.VALIDATION_ERROR:
      res.status(statusCode).json({
        title: 'Validation Failed',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.NOT_FOUND:
      res.status(statusCode).json({
        title: 'Not Found',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.UNAUTHORIZED:
      res.status(statusCode).json({
        title: 'Unauthorized',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.FORBIDDEN:
      res.status(statusCode).json({
        title: 'Forbidden',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.SERVER_ERROR:
      res.status(statusCode).json({
        title: 'Server Error',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log('No Error, All good !');
      break;
  }
};
