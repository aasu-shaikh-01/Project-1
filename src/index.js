// // // require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./.env" });

connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import expres from "express";
// const app = expres();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR :", error);
//     throw error;
//   }
// })();
