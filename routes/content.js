
import { Router } from 'express'
import { getContent } from '../controllers/content.js'

const route = Router()

route.get('/contents', getContent)

export default route
