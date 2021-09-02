import { Request, Response } from 'express'
import { PostagensService } from '../services/postagens.service'
import { Postagens } from '../models/Postagens'
 
export class PostagemController {
  async index(request:Request,response:Response){
  try {
       const postagens = await Postagens.find()
       return response.status(200).json(postagens)
       
      } catch (error) {
       return response.status(400).json({error:error.message})
      }
    }

    async create(request: Request, response: Response) {
      try {
        const { created_at, updated_at, content } = request.body;

        const { _id } = request.params

        const postagemService = new PostagensService();

        const UserExists = await Postagens.findOne({_id})

      if(UserExists){
        return response.json("User Já Cadastrado")
      }
       
        
            const { Postagens } = await postagemService.execute({
             created_at,
             updated_at,
             content,
            });
            return response.status(201).json({
              Postagens
            });  

      } catch (error) {
        return response.status(400).json({error: error.message})
      }
    }
    async delete(request: Request, response: Response){
      try {
        const { _id } = request.params
  
        const Postagem = await Postagens.deleteOne(_id)
  
       response.status(201).json(Postagem)
        
      } catch (error) {
        return response.status(400).json({error:error.message})
      }
       
    }
}