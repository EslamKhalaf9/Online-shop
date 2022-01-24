import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_UI);
    console.log("connected to mongo database");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
