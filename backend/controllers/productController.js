import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

export const getProducts = asyncHandler(async (req, res) => {
  const fetchedProducts = await Product.find();
  res.send(fetchedProducts);
});

export const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const fetchedProduct = await Product.findById(id);
  if (!fetchedProduct) {
    res.status(400);
    throw new Error('Product not found');
  }
  res.send(fetchedProduct);
});
