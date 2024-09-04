import prodModel from "../config/models/productSchema.js"


class ProductController {
    
    static getProducts = async (req, res) => {

        try {
            const prod = await prodModel.find({});
            res.status(200).json({ prod });
        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }
    }
    static getProductDetail = async (req, res) => {
        const { prod_id, cat_id } = req.params;

        try {
            const prods = await prodModel.findOne({ _id: cat_id });
            res.status(200).json({ prod: prods.prods[prod_id] });

        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }
    }
    static getProductsById = async (req, res) => {
        const { cat_id } = req.params;

        try {
            const prods = await prodModel.findOne({ _id: cat_id });

            res.status(200).json({ prods: prods.prods });
        }
        catch (err) {
            res.send(500).json({ "Server Error": err.message });
        }
    }
}
export default ProductController;