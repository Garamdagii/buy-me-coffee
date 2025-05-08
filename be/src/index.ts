import express, { json } from "express";
import cors from "cors";
import { userRouter } from "./routes/user";

const app = express();
const port = 8000;

// app.get("/", (req, res) => {
//   res.send("hello");
// });
app.use(json());
app.use(cors());

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
