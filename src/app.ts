import cors from 'cors'
import express, { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/users.route'
import * as swaggerDocument from './swagger.json'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing
app.get('/', () => {
  //throw new Error('Not implemented')
  console.log('working perfect')
})
app.use('/api/v1/users', UserRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(globalErrorHandler)
export default app
