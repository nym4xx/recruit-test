
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
import routes from './routes/index.js'

app.use(cors({
    origin: 'https://jsonplaceholder.typicode.com'
}))
app.use(routes)

const port = process.env.PORT || 3000
const server_address = process.env.SERVER_ADDRESS || '127.0.0.1'


app.listen(port, server_address, () => {

    console.log(`Listening to port ${port} on ${server_address}`)
})
