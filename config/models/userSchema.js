import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true, trim: true, min: 5, max: 20 },
    lastname: { type: String, required: true, trim: true, min: 5, max: 20 },
    phone: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true, trim: true, min: 5, max: 20 },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true, min: 5, max: 20 },
    
})

userSchema.pre("save", async function (next) {
    let user = this;
    if (!user.isModified("password")) return next();
    try {
        let salt = await bcrypt.genSalt(10);
        let hash_pass = await bcrypt.hash(user.password, salt);
        user.password = hash_pass;
        return next();
    }
    catch (err) {
        return next(err);
    }
})


userSchema.methods.comparePassword = async function (password) {

    try {
        return await bcrypt.compare(password, this.password);

    }
    catch (err) { throw err; }
}

const userModel = mongoose.model("user", userSchema);
export default userModel;