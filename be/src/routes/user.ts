import express from "express";
import { createUser, findUsers, updateUserById } from "../controllers/user";

export const userRouter = express.Router();
userRouter
  .post("/", createUser as any)
  .get("/", findUsers as any)
  .put("/:id", updateUserById as any);
