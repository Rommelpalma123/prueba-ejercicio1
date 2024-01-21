import { Router } from 'express'
import { todoController } from '../controllers/todo.controller'

const router = Router()

router.get('/', todoController.allTodos)
router.post('/create', todoController.createTodo)
router.delete('/delete/:idTodo', todoController.deleteTodo)

export default router
