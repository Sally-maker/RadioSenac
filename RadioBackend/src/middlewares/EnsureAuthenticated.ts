import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { HttpException } from "../errors/HttpException";

type UserPayload = {
  sub: string,
  exp: number,
  iat: number
}

export const EnsureAuthenticated = (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {
   const AuthHeader = request.headers.authorization

   if(!AuthHeader){ 
    throw new HttpException("jwt token is missing", 401);
  }

  const token = request.headers.authorization.split(' ')[1];

   try {
       const subjectToken = verify(token, process.env.SECRECT_TOKEN)

       const { sub } = subjectToken as UserPayload;

       request.user = {
         _id: sub,
       }
       next()
   } catch (error) {
     console.log(error)
      throw new HttpException("invalid jwt token", 401);
   }
}
