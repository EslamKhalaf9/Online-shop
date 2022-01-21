import products from "../data/products.js";
export default class Product {
  static fetchAll() {
    return products;
  }
  static fetchById(id) {
    const product = products.find((p) => p._id === id);
    return product;
  }
}
