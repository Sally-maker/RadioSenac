import {Router} from 'express'

import {routes} from './User.routes'
import {routess} from './Postagens.routes'
import { EnsureAuthenticated } from '@middlewares/EnsureAuthenticated'

export const Routes = Router()

Routes.use('/Postagem', EnsureAuthenticated, routess)
Routes.use('/users', routes)