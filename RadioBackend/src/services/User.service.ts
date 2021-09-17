import { hash } from "bcrypt";
import {User, UserProps} from '../models/User'

interface IUser {
  email:string,
  name:string,
  password:string,
  created_at:Date
  role: string
}

interface Response {
  user:Omit<UserProps,"password">
}

export class CreateUserService {
  async execute({name,email,password,created_at,role}:IUser):Promise<Response>{
    
      const newUser = new User({
        name,
        email,  
        password: await this.generateHashedPassword(password),
        created_at,
        role
      })
  
      await newUser.save()
  
      return {
        user:newUser
      }
  }
  private async generateHashedPassword(password: string) {
    return hash(password, 8);
  }
}
