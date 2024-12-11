import { generateToken } from "../config/middleware/tokenAction";
import userModel from "../config/models/userSchema.js";
import bcrypt from "bcrypt";

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
}

export default UserController;