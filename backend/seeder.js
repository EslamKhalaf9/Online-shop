/**
 * simply add sample data to the database
 * to insert data simply run the command node seeder.js
 * to delete all the db data BE CAREFUL run the command node seeder.js delete
 */

import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/database.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // delete all exist data
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const savedUsers = await User.insertMany(users);
    const adminUserId = savedUsers[0]._id;
    let newProducts = products.map((p) => {
      return { ...p, user: adminUserId };
    });
    await Product.insertMany(newProducts);
    console.log("perfect");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //delete all exist data
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    console.log("Deleted");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "delete") {
  destroyData();
} else {
  importData();
}
