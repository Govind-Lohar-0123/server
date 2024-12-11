import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js"
import connectDB from "./config/db/dbConnect.js";
import bodyParser from "body-parser"
import productRouter from "./routes/productRoute.js"
import sendEmail from "./utils/sendEmail.js";
import cartReducer from "./routes/cartRoute.js"
import otpRouter from "./routes/otpRouter.js";
dotenv.config();


const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json());
app.use(cors())
//DATABSE CONNECTION
connectDB(null, null);

//middleware
app.use(express.json());

//Load Routes
app.use("/user-api", userRoute);
app.use("/product-api", productRouter);
app.use("/cart-api", cartReducer);
app.use("/otp-api", otpRouter);


app.post("/send-email", sendEmail);



if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}




//Server Listening
app.listen(PORT, () => {

})









