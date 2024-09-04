import jwt from "jsonwebtoken";
import { verifyToken } from "./tokenAction";
import userModel from "../models/userSchema";



const jwtAuthMiddleware=async(req,res,next)=>{
    
    const token=req.headers.authorization.split(" ")[0];
    
    try{
        if(token=="")res.send({status:false,mag:"Unthorize User..."});
        const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;
        const payload=verifyToken(JWT_SECRET_KEY,token);
        req.user=await userModel.find({email:payload.email});
        next();
    }
    catch(err){
        res.send({status:false,msg:"Invalid Token"});
    }
}

export default jwtAuthMiddleware;