import express from "express"
const router =express.Router();
import ProductController from "../controllers/productController.js";




router.get("/get-products",ProductController.getProducts);
router.get("/get-product-detail/:cat_id/:prod_id",ProductController.getProductDetail);
router.get("/get-product/:cat_id",ProductController.getProductsById);



export default router;