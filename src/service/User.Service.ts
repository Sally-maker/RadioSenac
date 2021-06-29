import { getCustomRepository, Repository} from "typeorm"
import { UserEntities } from '@entities/UserEntities'
import { UserRepository } from '@repository/UserRepository'


interface IUserCreate{
  name:string
  email:string
  password:string
  admin:boolean
}
class UserService {
      private UserRepo:Repository<UserEntities>
      constructor(){
        this.UserRepo = getCustomRepository(UserRepository)
      }
  
    async create({email,admin,name,password}:IUserCreate){
      if(!email){
        throw new Error("Email Incorrect")
      }
      const alreadyUserExist = await this.UserRepo.findOne({email})

      if(alreadyUserExist){
       throw new Error("User already exist")
      }

      const Users = this.UserRepo.create({
        email,
        password,
        admin,
        name
      })
      await this.UserRepo.save(Users)  
      return Users
    }
}

export { UserService }
