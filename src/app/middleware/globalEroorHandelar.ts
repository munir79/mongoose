import { error } from 'console';
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const globalErrorHandelar: ErrorRequestHandler = (err, req, res, next) => {
  // seetings default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong';

  type TerrorSources = {
    path: string | number;
    message: string;
  }[];

  let errorSources: TerrorSources = [
    {
      path: '',
      message: 'Something went wrorng',
    },
  ];

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'ami zod error';
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};

// export default globalErrorHandelar;

// //  success ,message, errorSources:[  path:'' ,message:' ' ]

//        stcak

// //
