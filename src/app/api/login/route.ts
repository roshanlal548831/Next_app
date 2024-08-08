import bcrypt from "bcrypt";
import { mognodbConnection } from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/model/userModel";
import jwt from "jsonwebtoken"

export async function POST(req:any){
    try {
        mognodbConnection();
       const {email,password} = await  req.json()
        const isEmail = await User.findOne({email})
          if(!isEmail){
            return NextResponse.json({message :"Email not exist"},{status:400});
          };

         const comparePassword = await bcrypt.compare(password,isEmail.password);
         if(comparePassword){
            const token = await jwt.sign({email:isEmail.email},process.env.TOKEN_KEY!)
            return NextResponse.json({message :"Login success",success:true,token},{status:200});
         }else{
            return NextResponse.json({message :"worng password"},{status:400});

         }
         
    } catch (error) {
        console.log("this is login error =>", error)
    }
}