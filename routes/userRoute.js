import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";



router.put("/forget-password", UserController.forgetPassword);
router.put("/change-pass", UserController.changePassword);


router.post("/signup", UserController.register);
router.post("/login", UserController.login);
router.put("/update", UserController.userUpdate);
router.delete("/delete/:prod_id", UserController.deleteAccount);


export default router;