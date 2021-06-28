import {AdminService} from '@service/Admin.Service'
import {Response,Request} from 'express'
import {AuthService} from '@service/Auth.service'

class AdminController{
    async create(Request:Request, Response:Response):Promise<Response>{
      const {email, password} = Request.body
      const {id} = Request.params
      
      const UserStandartService = new AdminService()
   
      const UserStandart = await UserStandartService.create({email,id,password})
        
      return Response.json(UserStandart)
    }

    async auth(Request:Request, Response:Response):Promise<Response>{
      const { email, password } = Request.body;

      const authService = new AuthService();

      const { user, token } = await authService.execute({
        email,
        password,
      });

      return Response.status(200).json({
        user,
        token,
      });
    }
}
export {AdminController}