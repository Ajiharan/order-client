import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { logger } from "./logs/logger.js";

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

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection successfully");
});

app.listen(PORT, () => {
  console.log(`port listen in ${PORT}`);
  logger.info(`port listen in ${PORT}`);
});
