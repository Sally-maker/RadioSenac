import { Request, Response, NextFunction } from "express";

import { HttpException as AppError } from "../errors/HttpException";
export function HandlingError(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode,
    });
  }

  return response.status(500).json({
    message: "Internal server error.",
    statusCode: 500,
  });
}
