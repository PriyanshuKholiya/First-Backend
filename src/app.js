import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";   

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}));
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"////router import, router contains all the routes defined in the file with their methods
app.use("/api/v1/users", userRouter)//routes declaration - tells express to use this router/middleware under the api/v1/users path

export { app }