import mongoose from "mongoose"


const connectDB= async(USERNAME,PASSWORD)=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Connection Successfully...");

    }
    catch(err){
        console.log("Server Error",err.message);
    }
}
export default connectDB;