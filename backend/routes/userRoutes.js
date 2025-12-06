import express from "express";
import { registerUser } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);

export { userRouter };
