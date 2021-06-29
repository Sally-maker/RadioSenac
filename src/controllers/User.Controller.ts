import { UserService } from '@service/User.Service'
import {Response,Request} from 'express'

class UserController{
 async handle(Request:Request, Response:Response):Promise<Response>{
      const {email, password,admin,name} = Request.body
      
      const userService = new UserService()
   
      const User = await userService.create({email,password,admin,name})
        
      return Response.json(User)
    }
}
export {UserController}