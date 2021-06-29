import { Router } from "express";
import {UserController} from '@controllers/User.Controller'

const routesUser = Router()

const userController = new UserController()




routesUser.post('/createUser', userController.handle)

export { routesUser }