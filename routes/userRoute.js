import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";




router.post("/signup", UserController.register);
router.post("/login", UserController.login);
router.put("/update", UserController.userUpdate);
router.delete("/delete/:prod_id", UserController.deleteAccount);


export default router;