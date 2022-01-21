import express from "express";
import { getProducts, getProduct } from "../controllers/productController.js";

const router = express.Router();

// GET /api/products/  => [products]
router.get("/", getProducts);

// GET /api/products/:id  => {product}
router.get("/:id", getProduct);

export default router;
