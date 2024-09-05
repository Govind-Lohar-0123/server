import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js"
import connectDB from "./config/db/dbConnect.js";

import productRouter from "./routes/productRoute.js"

import cartReducer from "./routes/cartRoute.js"
dotenv.config();


const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors())
//DATABSE CONNECTION
connectDB(null, null);

//middleware
app.use(express.json());

//Load Routes
app.use("/user-api", userRoute);
app.use("/product-api", productRouter);
app.use("/cart-api", cartReducer);

//LOAD DEFAULT DATA

// step=>3

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}




//Server Listening
app.listen(PORT, () => {
    console.log("Server is running on Port", { PORT });
})




