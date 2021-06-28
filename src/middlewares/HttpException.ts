import {Request, Response, NextFunction} from 'express'
import {HttpException as AppError } from '@error/HttpException'

export function HttpException(error:Error, request:Request, response:Response, _:NextFunction){
   if( error instanceof AppError){
     return response.status(error.statusCode).json({
       message:error.message,
       statusCode: error.statusCode
     })
   }

   return response.status(500).json({
     message: " Interval server error",
     statusCode: 500
   })
}