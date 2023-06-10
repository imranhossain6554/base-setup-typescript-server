import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/users.route';
import * as swaggerDocument from './swagger.json';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Testing
app.get('/', async (req: Request, res: Response) => {
  //throw new Error('Not implemented')
  res.status(200).json({
    success: true,
    message: 'running successfully!',
  });
});
app.use('/api/v1/users', UserRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(globalErrorHandler);
export default app;
