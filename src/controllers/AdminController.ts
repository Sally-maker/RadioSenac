import {AdminService} from '@service/AdminService'
import {Response,Request} from 'express'

class AdminController{
    async create(Request:Request, Response:Response):Promise<Response>{
      const {email, password} = Request.body
      const {id} = Request.params
      
      const UserAdminService = new AdminService()
   
      const UserAdmin = await UserAdminService.create({email,password,id})
        
      return Response.json(UserAdmin)
    }
}
export {AdminController}