import mongoose from "mongoose";

const productSchma = new mongoose.Schema({
    url: { type: String, required: true },
    content: { type: Object }
});

const prodModel = mongoose.model("product1", productSchma);
export default prodModel;