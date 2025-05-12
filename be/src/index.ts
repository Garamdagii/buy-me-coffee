import express, { json } from "express";
import cors from "cors";
import { userRouter } from "./routes/user";
import { profileRouter } from "./routes/profile";
import { signupRouter } from "./routes/auth-signup";
import { signinRouter } from "./routes/auth-signin";

const app = express();
const port = 8000;

app.use(json());
app.use(cors());

app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/sign-up", signupRouter);
app.use("/sign-in", signinRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
