import { UserController } from '@controllers/UserController';
import {Router} from 'express'

export const routes = Router()

const userController = new UserController()

routes.get('/', userController.index)
routes.post('/createUser', userController.create)
routes.post("/auth", userController.session)
routes.get("/show", userController.show)
routes.delete("/deleteUsers", userController.delete)