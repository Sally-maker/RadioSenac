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

  /*
const usuarios = ['fulano', 'ciclano', 'cibertano']

// regra para setar uma role padrão no backend a um usuário
// ao se cadastrar
function acessarOuCadastrar(nomeDoUsuario) {
  const { role, nome, email, password } = request.body

  const usuarioExiste = usuarios.find(usuario => usuario === nomeDoUsuario)

  if (usuarioExiste) {
    return usuarioExiste
  }

  if (role) {
    nomeDoUsuario.role = role
    usuarios.push(nomeDoUsuario)
    return nomeDoUsuario
  }

  nomeDoUsuario.role = 'standard'
  usuarios.push(nomeDoUsuario)
  return nomeDoUsuario
  */

  async create(request: Request, response: Response) {
    try {
      const { name, email, password,created_at, role} = request.body;

      console.log(role)

      const createUserService = new CreateUserService();

      const UserExists = await User.findOne({email})

      if(UserExists){
        return response.json("User Já Cadastrado")
      }
      if(role){
         UserExists.role = role 
         return UserExists
       }
      

      const {user} = await createUserService.execute({
        name,
        email,
        password,
        created_at,
        role: UserExists.role = 'standard'
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