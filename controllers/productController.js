import prodModel from "../config/models/productSchema.js"


class ProductController {

    static getProducts = async (req, res) => {

        try {
            const prod = await prodModel.find();
            res.status(200).json({ prod });
        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }
    }
    static getProductsByLimit = async (req, res) => {
        const { page, limit } = req.params;

        let skip = (page - 1) * limit;

        try {
            const prod = await prodModel.find().skip(skip).limit(limit);
            res.status(200).json({ prod });
        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }
    }
    static getProductDetail = async (req, res) => {
        const { prod_id } = req.params;

        try {
            const prods = await prodModel.findOne({ _id: prod_id });
            res.status(200).json({ prod: prods });

        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }
    }
    static getProductsById = async (req, res) => {
        const { prod_id } = req.params;

        try {
            const prods = await prodModel.findOne({ _id: prod_id });

            res.status(200).json({ prods: prods });
        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }

    }
}
export default ProductController;