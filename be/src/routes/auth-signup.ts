import express from "express";
import { checkUser } from "../controllers/auth/sign-up.controller";

export const signupRouter = express.Router();

signupRouter.post("/", checkUser as any);
