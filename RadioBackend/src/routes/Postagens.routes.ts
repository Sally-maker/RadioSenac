import {PostagemController} from '../controllers/Postagem.controller'
import {Router} from 'express'


export const routess = Router()

const postagemController = new PostagemController()

routess.post('/createPostagem', postagemController.create)
routess.get('/postagens', postagemController.index)
routess.delete('/deletePostagem', postagemController.delete)

