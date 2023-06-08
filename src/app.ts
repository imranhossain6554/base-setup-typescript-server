import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import { UserRoutes } from './app/modules/users/users.route'
import * as swaggerDocument from './swagger.json'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})
app.use('/api/v1/users', UserRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app
