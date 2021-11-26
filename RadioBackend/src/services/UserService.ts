import { hash } from "bcryptjs";
import { User, UserProps } from '@models/User'

interface IUser {
  email:string,
  password:string,
  created_at:Date
  role: string
}

interface Response {
  user:Omit<UserProps,"password">
}

export class CreateUserService {
  private async generateHashedPassword(password: string) {
    return hash(password, 8);
  }
  async execute({email,password,created_at,role}:IUser):Promise<Response>{

     const UserExist = await User.findOne({email})

     if(UserExist){
        throw new Error('Usuário já cadastrado');
     }
    
      const newUser = new User({
        email,  
        password: await this.generateHashedPassword(password),
        created_at,
        role
      })
  
      await newUser.save()
     
      return {
        user: newUser
      }
  }
}
 