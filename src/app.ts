import cors from 'cors'
import express, { Application, Request } from 'express'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
  res.send('server running successfully!')
})

export default app
