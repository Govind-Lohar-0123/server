import express from "express";
import OTPController from "../controllers/otpController.js";
const router = express.Router();


router.get("/send-otp", OTPController.sendOTP);
router.get("/verify-otp", OTPController.verifyOTP);
export default router;