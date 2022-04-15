import { UserController } from '@controllers/UserController';
import { EnsureAuthenticated } from '@middlewares/EnsureAuthenticated';
import {Router} from 'express'

export const routes = Router()

const userController = new UserController()

routes.get('/',EnsureAuthenticated, userController.index)
routes.post('/createUser', userController.create)
routes.post("/auth", userController.auth)
routes.get("/show", EnsureAuthenticated, userController.show)
routes.delete("/deleteUsers", EnsureAuthenticated, userController.delete)