import { todoService } from '../services/todo.service'
import { Response, Request } from 'express'

export const todoController = {
  allTodos: async (_req: Request, res: Response) => {
    try {
      const todos = await todoService.getAllTodos()
      res.status(200).json(todos)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  deleteTodo: async (req: Request, res: Response) => {
    try {
      const todo = await todoService.deleteTodo(req.params.idTodo)
      res.status(200).json(todo)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  createTodo: async (req: Request, res: Response) => {
    try {
      const todo = await todoService.createTodo(req.body)
      res.status(200).json(todo)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  }
}
