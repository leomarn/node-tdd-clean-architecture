import { Router, type Express } from 'express'
import signup from '../routes/signup-routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  signup(router)
}
