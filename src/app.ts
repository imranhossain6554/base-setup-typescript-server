import cors from 'cors'
import express, { Application, Response } from 'express'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing
app.get('/', (reqaa, res: Response) => {
  res.send('Working Successfully')
})

export default app
