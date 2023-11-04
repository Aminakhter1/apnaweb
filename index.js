import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routerAll from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";

import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import {fileURLToPath} from 'url';
//config env note if env file is in another folder you mention in config({path:"write path"})
dotenv.config();
//database config
connectDB();
//esmodule config
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//rest object
const app = express();
//rest api
//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", routerAll);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);
//port
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080;
//run listen
app.listen(PORT, () => {
  console.log("server is running successfully 8080");
});
