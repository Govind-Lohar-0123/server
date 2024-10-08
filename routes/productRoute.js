import express from "express"
const router = express.Router();
import ProductController from "../controllers/productController.js";




router.get("/get-products", ProductController.getProducts);
router.get("/get-products/:page/:limit", ProductController.getProductsByLimit);
router.get("/get-product-detail/:prod_id", ProductController.getProductDetail);
router.get("/get-product/:prod_id", ProductController.getProductsById);



export default router;