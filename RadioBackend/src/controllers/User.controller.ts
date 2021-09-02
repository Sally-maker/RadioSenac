import { AuthService } from './../services/auth.service';
import { CreateUserService } from './../services/User.service';
import {Request,Response} from 'express'
import { User } from '../models/User'


export class UserController {
  async index(request:Request, response:Response){
    try {
      const users = await User.find()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }

  async create(request: Request, response: Response) {
    try {
      const { name, email, password,created_at, type} = request.body;

      const createUserService = new CreateUserService();

      const UserExists = await User.findOne({email})

      if(UserExists){
        return response.json("User Já Cadastrado")
      }
      const {user} = await createUserService.execute({
        name,
        email,
        password,
        created_at,
        type
      });

      return response.status(201).json({
        user
      });
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }

  
  async session(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authService = new AuthService();

      const { user, token } = await authService.execute({
        email,
        password,
      });

      return response.status(200).json({
        user,
        token,
      });
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  } 

  async show(request: Request, response: Response) {
    try {
      const { email } = request.body;

      const user = await User.findOne({ email });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }

  async delete(request:Request, response:Response){
    const { _id } = request.params
    try {
      const userDelete = await User.deleteOne(_id)

    return response.status(201).json(userDelete)
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }
}