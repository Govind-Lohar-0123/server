import mongoose from "mongoose";

const productSchma=new mongoose.Schema({
    // id:{type:String,required:true,unique:true},
    category:{type:String,required:true},
    prods:{type:Array},
});

const prodModel=mongoose.model("product",productSchma);
export default prodModel;