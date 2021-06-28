import {Request , Response, NextFunction} from 'express'
import {verify} from 'jsonwebtoken'
import {HttpException} from '@error/HttpException'
import { jsonWebTokenConfiguration } from "../config/auth";



interface TokenPayload{
  iat:number;
  exp:number;
  sub:string
}


export function ensureAuthenticate(request:Request, response:Response, next:NextFunction){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new HttpException("JWT token is missing", 401)
  }

  const [,token] = authHeader.split(" ")

  try {
    const decoded = verify(token, jsonWebTokenConfiguration.secret)

    const {sub} = decoded as TokenPayload

    request.user = {
      _id:sub
    }
    next()
  } catch (error) {
    throw new HttpException("invalid jwt token", 401)
  }
}