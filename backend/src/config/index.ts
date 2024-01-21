import { config } from 'dotenv'
import { address } from 'ip'

if(process.env.NODE_ENV === 'production'){
  config({ path: '.env.production' })
}
else{
  config({ path: '.env.development' })
}

export const MONGO_URI = process.env.MONGO_URI
export const PORT = process.env.PORT
export const DOMAIN = process.env.DOMAIN === 'localhost' ? address() : process.env.DOMAIN
export const SECRET = process.env.SECRET