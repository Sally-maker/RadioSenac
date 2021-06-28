import {StandartService} from '@service/Standart.Service'
import {Response,Request} from 'express'

class StandartController{
    async create(Request:Request, Response:Response):Promise<Response>{
      const {email, password} = Request.body
      const {id} = Request.params
      
      const UserStandartService = new StandartService()
   
      const UserStandart = await UserStandartService.create({email,id,password})
        
      return Response.json(UserStandart)
    }
}
export {StandartController}