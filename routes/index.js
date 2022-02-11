
import { Router } from 'express'
import contentRoutes from './content.js'

const route = Router()

route.use(contentRoutes)

export default route
