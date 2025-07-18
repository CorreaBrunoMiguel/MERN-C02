import express from 'express';
import { validationResult } from 'express-validator';

export interface IvalidationError {
  type?: string;
  msg?: string;
  path?: string;
  location?: string;
}

export const validate = (validations: Array<any>) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const errorMessages = errors.array().map((error: IvalidationError) => {
      const obj = {};
      obj[error.path] = error.msg;
      return obj;
    });
    return res
      .status(400)
      .json({ statusCode: 400, status: 'error', errors: errorMessages });
  };
};
