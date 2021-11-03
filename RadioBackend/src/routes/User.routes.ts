import { UserController } from './../controllers/User.controller';
import {Router} from 'express'
import { ensureAuthenticate } from '@middlewares/UserAuthenticate';

export const routes = Router()

const userController = new UserController()

routes.get('/', userController.index)
routes.post('/createUser', userController.create)
routes.post("/auth", ensureAuthenticate , userController.session)
routes.get("/show", userController.show)
routes.delete("/deleteUsers", userController.delete)