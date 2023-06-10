import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync(req.body); // Only pass the req.body directly
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
