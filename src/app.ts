import cors from 'cors'
import express, { Application } from 'express'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
get('/', (reqss, res) => {
  res.send('server running successfully!')
})

export default app
