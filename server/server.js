import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { logger } from "./logs/logger.js";
import OrderRouter from "./routers/OrderRouter.js";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", OrderRouter);

const connection = mongoose.connection;
connection.once("open", () => {
  logger.info("Mongodb connection successfully");
});

app.listen(PORT, () => {
  logger.info(`port listen in ${PORT}`);
});
