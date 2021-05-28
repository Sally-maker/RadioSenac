import { Router } from "express";
import {AdminController} from '@controllers/AdminController'

const routesAdmin = Router()

const admincontroller = new AdminController()

routesAdmin.post('/createUserAdmin', admincontroller.create)

export {routesAdmin}