import {Router} from 'express'

import {routes} from './User.routes'
import {routess} from './Postagens.routes'

export const Routes = Router()

Routes.use('/Postagem',routess )
Routes.use('/users', routes)