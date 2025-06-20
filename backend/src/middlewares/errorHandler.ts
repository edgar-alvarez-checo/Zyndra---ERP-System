import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response =>{
  console.error('Error:', err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      status: 'fail',
      message: 'Validation error',
      errors: err.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message
      }))
    });
  }

  // Otros errores conocidos
  const statusCode = err.status || 500;
  const message = err.message || 'Internal server error';

  return res.status(statusCode).json({
    status: 'error',
    message
  });
}
