import { getCustomRepository, Repository} from "typeorm"
import {UserStandart} from '@entities/userStandartEntities'
import {StandartRepository} from '@repository/StandartRepository'
import { Response } from "express"


interface IStandartCreate{
  id:string
  email:string
  password:string
}
class StandartService {
    private UserRepo:Repository<UserStandart>
    constructor(){
      this.UserRepo = getCustomRepository(StandartRepository)
    }
  
    async create({email, id, password}:IStandartCreate){
      const alreadyUserExist = await this.UserRepo.findOne({where: {email}})

      if(!alreadyUserExist){
        return  'User Já existe'
      }
      const UserStandartt = this.UserRepo.create({
        email,
        password
      })
      await this.UserRepo.save(UserStandartt)  
      return UserStandartt
    }
}

export { StandartService }
