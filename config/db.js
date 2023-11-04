import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aminakhter1166:iKC3ZCtHscD3ahXu@cluster0.nhwmuoj.mongodb.net/ecomweb"
    );
    console.log(`connect to MongoDb  ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};
export default connectDB;
