import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "./config/prisma.js";
import { userRouter } from "./routes/userRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server running at", port));
