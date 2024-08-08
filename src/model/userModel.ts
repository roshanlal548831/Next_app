import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
       type:String,
       required:[true,"Please provide a username"],
      
    },
    email:{
       type:String,
       required:[true,"Please provide a username"],
       unique:true
    },
    password:{
       type:String,
       required:[true,"Please provide a username"],
    },
   
   
   
},{timestamps: true});

const User = mongoose.models.user || mongoose.model("user",UserSchema);

export default  User