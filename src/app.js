// packages
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
// set variable
const app = express();

// set default middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
// app export
export { app };
