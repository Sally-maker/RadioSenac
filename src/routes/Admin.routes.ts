import { Router } from "express";
import {AdminController} from '@controllers/AdminController'
import {ensureAuthenticate} from '@middlewares/ensureAuthenticated'

const routesAdmin = Router()

const admincontroller = new AdminController()

routesAdmin.post('/createUserAdmin', admincontroller.create)
routesAdmin.post('/auth', ensureAuthenticate, admincontroller.auth)

export {routesAdmin}