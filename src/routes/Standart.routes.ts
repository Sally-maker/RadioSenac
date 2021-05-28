import { Router } from "express";
import {StandartController} from '@controllers/StandartController'

const routesStandart = Router()

const Standartcontroller = new StandartController()

routesStandart.post('/createUserStandart', Standartcontroller.create)


export {routesStandart}