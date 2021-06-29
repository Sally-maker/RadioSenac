import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import 'reflect-metadata'
import '@database/index'
import {routesUser} from './routes'

const app = express();
app.use(express.json())
app.use(express.static('.'))
app.use(express.urlencoded({extended:true}))
app.use(routesUser)

app.listen(3333, () => console.log('[INFO]:Server is Running...'));
