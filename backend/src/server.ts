import http from 'http'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connectDB } from './database/database'
import { allRoutes } from './routers/index'

export class Server {
  private app
  constructor() {
    this.app = express()
    connectDB()
    this.configuration()
    this.middlewares()
    this.routes()
  }

  private configuration() {
    this.app.set('port', 5000)
  }

  private middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(
      cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
      })
    )
    this.app.use(express.json())
  }

  routes() {
    this.app.get('/', (_req, res) => {
      res.status(200).json({
        name: 'API REST TODOs'
      })
    })

    this.app.use('/todos', allRoutes.todoRouter)
  }

  public listen() {
    const server = http.createServer(this.app)
    server.listen(this.app.get('port'), () => {
      console.log(
        `Server está corriendo en el puerto http://localhost:${this.app.get(
          'port'
        )}`
      )
    })
  }
}
