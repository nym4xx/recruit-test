
import express from 'express'
const app = express()
import routes from './routes/index.js'

app.use(routes)

app.listen(3000, () => {

    console.log("Listening to port 3000")
})
