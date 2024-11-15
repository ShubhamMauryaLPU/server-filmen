import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./Router/user.route.js";
import authRouter from "./Router/auth.route.js";
import testRouter from "./Router/test.route.js";
import movieRouter from "./Router/movie.router.js";
import cors from "cors";
import dotenv from "dotenv";
import "./db.js";
dotenv.config();
// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true,
// };
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
  res.send("Live");
})
app.use(`/api`, userRoute);
app.use(`/api/auth`, authRouter);
app.use(`/api/test`, testRouter);
app.use(`/api/`, movieRouter);
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
