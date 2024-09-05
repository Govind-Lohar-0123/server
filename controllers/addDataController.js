import prodModel from "../config/models/productSchema.js"


class AddDataController{
    static addData=async(data)=> {
       
        try{
            const prod=await prodModel.insertMany(data);
           console.log("Data Successfull Added....")
        }
        catch(err){
          console.log("Server Error"+err.message);
        }
    }
  
}
export default AddDataController;