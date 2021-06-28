import { getCustomRepository, Repository} from "typeorm"
import {UserAdmin} from '@entities/userAdminEntities'
import {AdminRepository} from '@repository/AdminRepository'


interface IAdminCreate{
  id:string
  email:string
  password:string
}

class AdminService {
    private UserRepo:Repository<UserAdmin>
    constructor(){
      this.UserRepo = getCustomRepository(AdminRepository)
    }
  
    async create({email, id, password}:IAdminCreate){
      const alreadyUserExist = await this.UserRepo.findOne({where: {id}})

      if(alreadyUserExist){
        
      }
      const UserAdmin = this.UserRepo.create({
        email,
        password
      })
      await this.UserRepo.save(UserAdmin)  
      return UserAdmin
    }

}

export {AdminService}