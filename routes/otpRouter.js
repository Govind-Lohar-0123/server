import express from "express";
import OTPController from "../controllers/otpController.js";
const router = express.Router();


router.post("/send-otp", OTPController.sendOTP);
router.post("/verify-otp", OTPController.verifyOTP);
export default router;