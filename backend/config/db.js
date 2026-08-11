import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Sucessfully");
  } catch (error) {
    console.error("Error connecting mongoDB", error.message);
    process.exit(1);
  }
};
