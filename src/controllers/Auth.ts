import { getCustomRepository, Repository} from "typeorm"
import {UserStandart} from '@entities/userStandartEntities'
import {StandartRepository} from '@repository/StandartRepository'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Request, Response } from "express"



class StandartAuth {
    private UserRepo:Repository<UserStandart>
    constructor(){
      this.UserRepo = getCustomRepository(StandartRepository)
    }
  
    async Auth(req:Request, res:Response){
       const {password, email} = req.body
      const alreadyUserExist = await this.UserRepo.findOne({where: {email}})

      if(!alreadyUserExist){
        return res.sendStatus(401)
      }
      const isvalid = await bcrypt.compare(password, alreadyUserExist.password)
      if(!isvalid){
        return res.sendStatus(401)
      }

      const token = jwt.sign({id:alreadyUserExist.id},process.env.ACESS_TOKEN_SECRET, {expiresIn:'1d'})
       res.json({
         token,
         alreadyUserExist
      })
    }
}

export { StandartAuth }
 