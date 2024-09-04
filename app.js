import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js"
import connectDB from "./config/db/dbConnect.js";

import productRouter from "./routes/productRoute.js"
import AddDataController from "./controllers/addDataController.js";
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

//Server Listening
app.listen(PORT, () => {
    console.log("Server is running on Port", { PORT });
})




