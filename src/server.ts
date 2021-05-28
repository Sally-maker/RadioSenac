import express from 'express';
import 'reflect-metadata'
import {routesAdmin} from '@routes/Admin.routes'
import {routesStandart} from '@routes/Standart.routes'
import '@database/index'

const app = express();
app.use(express.json())
app.use(express.static('.'))
app.use(express.urlencoded({extended:true}))
app.use(routesAdmin)
app.use(routesStandart)

app.listen(3333, () => console.log('[INFO]:Servidor Rodando'));
