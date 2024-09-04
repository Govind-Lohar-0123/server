import express from "express"
const router = express.Router();
import CartController from "../controllers/cartController.js";




router.post("/add-to-cart", CartController.addToCart);
router.get("/get-all-carts", CartController.getAllCarts);

router.delete("/remove-from-cart/:prod_id", CartController.removeFromCart);



export default router;