import express from "express";
import postroutes from "./routes/post.route.js"

const app = express();



app.use("/api/posts",postroutes);

app.listen(8000,()=>{
    console.log("server is running");
});
