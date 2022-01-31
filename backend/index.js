import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/database.js";

import productsRouter from "./routes/products.js";
import usersRouter from "./routes/usersRoutes.js";

connectDB();
const app = express();

app.use(express.json());
//@TODO: modify it later its bad for security
app.use(cors());

app.use("/api/products", productsRouter);
app.use("/api/user", usersRouter);

//not found handler
app.use((req, res, next) => {
  res.status(404);
  const err = new Error("not found");
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
