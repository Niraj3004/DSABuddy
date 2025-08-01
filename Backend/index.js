import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import questionRoute from "./routes/questionRoute.js";
import messageRoute from "./routes/messageRoute.js";
import courseRoute from "./routes/courseRoute.js";
import aiRoute from "./routes/ai.route.js";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/question", questionRoute);
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/ai", aiRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
