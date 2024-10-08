import mongoose from "mongoose"


const connectDB= async(USERNAME,PASSWORD)=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology:true,useNewUrlParser:true});
       

    }
    catch(err){
       
    }
}
export default connectDB;