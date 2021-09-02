import { Request, Response, NextFunction } from "express";
import {verify} from 'jsonwebtoken'

import {AppError} from '../errors/HttpException'


interface IPayload {
  iat:number;
  exp:number;
  sub:string
}


export function ensureAuthenticate(
  request:Request,
  response:Response,
  next:NextFunction
){
  
  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError("jwt token is missing",401)
  }

  const [ ,token] = authHeader.split(" ")

  try {
    const decoded = verify( token, process.env.SECRECT_TOKEN )

    const { sub } = decoded as IPayload

    request.user = {
      _id:sub
    }
    next()
  } catch (error) {
    throw new AppError("invalid jwt token",401)
  }
}

