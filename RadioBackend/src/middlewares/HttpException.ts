import { AppError } from './../errors/HttpException';
import {NextFunction, Request,Response} from 'express'

export function HttpEsception(error:Error,request:Request, response:Response,_:NextFunction){
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      message:error.message,
      statuscode:error.statusCode
    })
  }
  return response.status(500).json({
    message: "Internal server error.",
    statusCode: 500,
  })
}
