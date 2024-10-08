

import randomstring from "randomstring";
import otpModel from "../config/models/otpSchema.js";
import sendEmail from "../OTPSendByEmail/sendOTPtoEmail.js";
export default class OTPController {

    static generateOTP() {
        return randomstring.generate({
            length: 6,
            charset: 'numeric'
        });
    }


    static sendOTP = async (req, res, next) => {

        try {
            const { email } = req.body;
            const otp = OTPController.generateOTP(); // Generate a 6-digit OTP

            let userEamil = await otpModel({ email });
            if (userEamil != null) await otpModel.findOneAndDelete({ email });

            await otpModel.insertMany({ email, otp });

            // Send OTP via email
            await sendEmail({
                to: email,
                subject: 'Your OTP',
                message: `<p>Your OTP is: <strong>${otp}</strong></p>`,
            });

            res.status(200).json({ success: true, message: 'OTP sent successfully' });
        } catch (error) {
            console.error('Error sending OTP:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    };

    static verifyOTP = async (req, res, next) => {
        try {
            const { email, otp } = req.body;
            const existingOTP = await otpModel.findOne({ email, otp });
           
     
            if (existingOTP!=null && existingOTP.otp == otp) {
                await otpModel.findOneAndDelete({ email });
               
                res.status(200).json({ success: true, message: 'OTP verification successful' });
            } else {
                // OTP is invalid
                res.status(400).json({ success: false, error: 'Invalid OTP' });
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    };
}
