import { Postagens } from '../models/Postagens'

 interface IPostagens {
    created_at:Date,
    updated_at:Date,
    content:string
 }

export class PostagensService{
   async execute({ created_at, updated_at, content }:IPostagens){
     
    const Postagem = new Postagens({
      created_at:created_at,
      updated_at:updated_at,
      content:content
    })

    await Postagem.save()

    return{
      Postagems: Postagem
    }
  }
}