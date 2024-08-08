import mongoose from "mongoose";

export const mognodbConnection = async() =>{
   try {
     await mongoose.connect(process.env.MONGODB_URI!)
     console.log("database connection success")
   } catch (error) {
    console.log("db error => ", error)
   }
}