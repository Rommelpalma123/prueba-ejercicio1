import { TodoModel } from '../models/todo.models'

export const todoService = {
  getAllTodos: async () => {
    return await TodoModel.find()
  },

  createTodo: async (entity: object) => {
    return await TodoModel.create(entity)
  },

  deleteTodo: async (idTodo: string) => {
    return await TodoModel.findByIdAndDelete(idTodo)
  }
}

/**
1. Implementar un servidor NodeJs que libere una API para crear, listar y borrar tareas para una TODOs App.
2. Deployar el servidor en algún proveedor gratuito (ej. Heroku, Netlify, etc).
3. Implementar una aplicación en React que brinde una interfaz para administrar los TODOs.
5. Implementar una aplicación en React native que brinde una interfaz para administrar los TODOs.
6. Implementar una configuración dentro de la aplicación React y React Native para cambiar el idioma (Español, Ingles, Portugues).
7. Subir el código del servidor, webapp y mobile app en un repositorio de Github o GitLab o Bitbucket.

Tener en cuenta que tienes que usar las tecnologías solicitadas (NodeJs, React, React Native).


*/
