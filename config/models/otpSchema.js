import mongoose from "mongoose";

const optSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: Number, required: true },
})
const otpModel = mongoose.model("otp", optSchema);
export default otpModel;