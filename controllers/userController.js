import { generateToken } from "../config/middleware/tokenAction";
import userModel from "../config/models/userSchema.js";
import bcrypt from "bcrypt";
import {generateHashPass} from "../utils/actions/passHashAction.js"
import { verifyPassword } from "../utils/actions/passHashAction.js";
class UserController {
    static register = async (req, res) => {

        const { user_data } = req.body;

        for (let key in user_data) {
            if (user_data[key] == "") {
                res.status(200).send({ status: false, msg: "Please Fill All Fields..." })
                return;
            }
        }

        try {
            let result = await userModel.findOne({ email: user_data.email });

            if (result == null) {

                await userModel(user_data).save();
                let user = await userModel.findOne({ email: user_data.email });
                let data = { firstname: user.firstname, lastname: user.lastname, phone: user.phone, email: user.email };
                const token = generateToken(process.env.JWT_SECRET_KEY, user_data.email);
                res.status(200).send({ status: true, msg: "User Registered...", token, user: data })
            }
            else res.status(200).send({ status: false, msg: "Email is aleardy exist..." })
        }
        catch (err) {

            res.status(200).send({ status: false, msg: "Server Error " + err.message });
        }
    }
    static userUpdate = async (req, res) => {

        const { user_data } = req.body;


        for (let key in user_data) {
            if (user_data[key] == "") {
                res.status(200).send({ status: false, msg: "Please Fill All Fields..." })
                return;
            }
        }

        try {
            if (user_data.hasOwnProperty("password")) {
                let salt = await bcrypt.genSalt(10);
                let hash_pass = await bcrypt.hash(user_data.password, salt);
                user_data.password = hash_pass;
            }

            await userModel.updateOne({ email: user_data.email }, { ...user_data })
            res.status(200).send({ status: true, msg: "User Update" })
        }


        catch (err) {
            res.status(200).send({ status: false, msg: "Server Error " + err.message });
        }
    }
    static deleteAccount = async (req, res) => {
        const { prod_id } = req.params;


        try {
            await userModel.deleteOne({ _id: prod_id });
            res.status(200).send({ status: true, msg: "Account Deleted" })
        }




        catch (err) {
            res.status(500).send({ status: false, msg: "Server Error" + err.message });
        }
    }
    static login = async (req, res) => {



        const { user_data } = req.body;

        for (let key in user_data) {
            if (user_data[key] == "") {
                res.status(200).send({ status: false, msg: "Please Fill All Fields..." })
                return;
            }
        }

        try {
            let user = await userModel.findOne({ email: user_data.email });
            if (user != null) {

                let isMatch = await user.comparePassword(user_data.password);
                if (isMatch) {


                    const token = generateToken(process.env.JWT_SECRET_KEY, user_data.email);
                    let data = { firstname: user.firstname, lastname: user.lastname, phone: user.phone, email: user.email };
                    res.status(200).send({ status: true, msg: "User loggin...", token, user: data })


                }
                else res.status(200).send({ status: false, msg: "Invalid username or password..." });


            }
            else res.status(200).send({ status: false, msg: "Invalid username or password..." })
        }
        catch (err) {

            res.status(500).send({ status: false, msg: "Server Error" + err.message });
        }
    }
    static forgetPassword = async (req, res) => {
        let user_data = req.body.user_data;
        let { email, newPassword } = req.body.user_data;
      
        for (let key in req.body.user_data) {
            if (user_data[key] == "" || user_data[key] == undefined) {
                res.status(201).send({ msg: "Please Fill All Field" });
                return;
            }
        }

        try {
            let user = await userModel.findOne({ email: email });
            if (user == undefined || user == null) {
                res.status(201).send({ msg: "Email is Invalid..." });
                return;
            }

            let newHashPass = await generateHashPass(newPassword);

            await userModel.updateOne({ email: email }, { password: newHashPass });

            res.status(200).send({ msg: "User Password Changed..." });

        }
        catch (err) {
        
            res.status(500).send({ msg: "Server Error " + err });
        }

    }
    static changePassword = async (req, res) => {
        let user_data = req.body.user_data;
        let { email, newPassword, oldPassword } = req.body.user_data;
        
        for (let key in user_data) {
            if (user_data[key] == "" || user_data[key] == undefined) {
                res.status(201).send({ msg: "Please Fill All Field" });
                return;
            }
        }


        try {
            let user = await userModel.findOne({ email: email });
            let hashPass = user.password;
            let isMatchPass = await verifyPassword(oldPassword, hashPass);

            if (isMatchPass == false) {
                res.status(201).send({ msg: "Old Password is Wrong..." });
            }
            else {
                let newHashPass = await generateHashPass(newPassword);

                await userModel.updateOne({ email: email }, { password: newHashPass });

                res.status(200).send({ msg: "User Password Changed..." });
            }


        }
        catch (err) {
            res.status(500).send({ msg: "Server Error " + err });
        }

    }
}

export default UserController;