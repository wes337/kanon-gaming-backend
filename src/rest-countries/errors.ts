import axios from "axios";
import { Request, Response, NextFunction } from "express";

export const handleHttpError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (axios.isAxiosError(error)) {
    const { status, statusText } = error.response || error.request;
    res.status(status).send(statusText);
  } else {
    next(error);
  }
};
