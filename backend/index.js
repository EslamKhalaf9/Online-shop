import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';

import productsRouter from './routes/products.js';
import usersRouter from './routes/usersRoutes.js';

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/api/products', productsRouter);
app.use('/api/user', usersRouter);

//not found handler
app.use((req, res, next) => {
  res.status(404);
  const err = new Error('not found');
  next(err);
});

//error handler
app.use((err, req, res, next) => {
  // console.log(res.statusCode);
  if (res.statusCode === 200) res.status(400);
  res.json({
    error: err.message,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
