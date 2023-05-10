import express from 'express';

import expenseRoutes from './routes/expense.routes';

import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json());

app.use('/', expenseRoutes);

export default app;