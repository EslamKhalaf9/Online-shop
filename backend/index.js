import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/database.js";

import productsRouter from "./routes/products.js";
connectDB();
const app = express();
app.use(cors());
app.use("/api/products", productsRouter);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
