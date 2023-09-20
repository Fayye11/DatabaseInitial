import Express, {Request, Response } from "express";
import dotenv from 'dotenv'
import path from 'path'
import mustache from 'mustache-express'
import mainroutes from './routes/index'

dotenv.config()

const server = Express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(Express.static(path.join(__dirname, '../public')))

//routes

server.use(mainroutes)

server.listen(process.env.PORT)