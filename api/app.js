import express from "express";
import cookieParser from "cookie-parser"
import postRoutes from "./routes/post.route.js"
import authRoutes from "./routes/auth.route.js"

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use("/api/posts",postRoutes);
app.use("/api/auth",authRoutes); 

app.listen(8000,()=>{
    console.log("server is running");
});
