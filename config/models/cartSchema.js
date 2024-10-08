import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    url: { type: String, required: true },
    content: { type: Object, required: true }
});

const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;