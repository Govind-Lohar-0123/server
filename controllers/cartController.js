import cartModel from "../config/models/cartSchema.js";


class CartController {

    static addToCart = async (req, res) => {
        const { prod } = req.body;

        try {
            const result = await cartModel.findOne({ url: prod.url });
            console.log(result);
            if (result != null) res.status(200).send({ status: true, msg: "Cart is Already Exixts.." });
            else {
                result = await cartModel.insertMany(prod);
                res.status(200).send({ status: true, msg: "Successfull added..." });
            }


        }
        catch (err) {
            res.status(200).send({ status: false, msg: "Searver Error" });
        }
    }
    static getAllCarts = async (req, res) => {

        try {
            const result = await cartModel.find();
            res.status(200).send({ status: true, prods: result });
        }
        catch (err) {
            res.status(200).send({ status: false, msg: "Searver Error" });
        }
    }
    static removeFromCart = async (req, res) => {
        const { prod_id } = req.params;
        try {
            const result = await cartModel.deleteOne({ _id: prod_id });
            res.status(200).send({ status: true, msg: "Successfull removed..." });
        }
        catch (err) {
            res.status(200).send({ status: false, msg: "Searver Error" });
        }
    }
}

export default CartController;