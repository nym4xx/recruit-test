
import { Router } from 'express'
import { getContent, getWebContent } from '../controllers/content.js'

const route = Router()

route.get('/contents', getContent)
route.get('/test', getWebContent)

export default route
