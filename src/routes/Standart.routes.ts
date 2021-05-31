import { Router } from "express";
import {StandartController} from '@controllers/StandartController'
import {StandartAuth} from '@controllers/Auth'

const routesStandart = Router()

const Standartcontroller = new StandartController()
const StandartAuthh = new StandartAuth()


routesStandart.post('/createUserStandart', Standartcontroller.create)
routesStandart.post('/auth', StandartAuthh.Auth)


export {routesStandart}