import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import userRouter from './modules/users/user.routes';
import employeeRouter from './modules/employees/employees.routes';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter); 
app.use('/employees', employeeRouter);

app.use(errorHandler as unknown as express.ErrorRequestHandler);

export default app;