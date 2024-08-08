import bcrypt from "bcrypt";
import { mognodbConnection } from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/model/userModel";
import jwt from "jsonwebtoken"


export async function POST(req:any){
    try {
        mognodbConnection();
       const {name,email,password} = await  req.json()
        const isEmail = await User.findOne({email})
          if(isEmail){
            return NextResponse.json({message :"Invalid Email",},{status:400});
          };
          const hashPassword = await bcrypt.hash(password,10)
         const userData = new User({name, email,password:hashPassword})
         const result = await userData.save();
         const token = jwt.sign({email:result.email},process.env.TOKEN_KEY!)
        if(result){        
            return NextResponse.json({message :"Register success",success:true,token},{status:200},);
         }
    } catch (error) {
        
    }
}