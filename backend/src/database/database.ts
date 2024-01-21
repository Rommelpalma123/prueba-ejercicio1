import mongoose from 'mongoose'
import { MONGO_URI } from '../config/index'

export const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error('La variable de entorno MONGO_URI no está definida')
    }

    await mongoose.connect(MONGO_URI)
    console.log('Conexión exitosa a MongoDB Atlas')
  } catch (error) {
    console.error('Error al conectar a MongoDB', error)
  }
}
